import {
  Tree,
  formatFiles,
  generateFiles,
  logger,
  names,
  readJsonFile,
  updateJson,
  workspaceRoot,
  writeJsonFile,
} from '@nx/devkit';
import * as fs from 'fs';
import { decode } from 'html-entities';
import * as path from 'path';

import { getSvgAttributes, getSvgTagContent } from '../../utils';
import { SimpleIconsGeneratorSchema } from './schema';
import {
  addSpaces,
  generatePerfectClassName,
  generatePerfectSelector,
  titleToComponentName,
} from './title-to-component-name';

interface SimpleIcon {
  title: string;
  hex: string;
  slug?: string;
  aliases?: {
    aka?: string[];
    dup?: {
      title: string;
      hex?: string;
    }[];
  };
}

interface GenerationStats {
  total: number;
  processed: number;
  failed: number;
  skipped: number;
  errors: string[];
}

function getSvgTitle(svgContent: string) {
  const regex = /<title>(.*?)<\/title>/;

  const match = regex.exec(svgContent);

  if (match) {
    return match[1];
  }

  return '';
}

const generateStats: GenerationStats = {
  total: 0,
  processed: 0,
  failed: 0,
  skipped: 0,
  errors: [],
};

export async function simpleIconsGenerator(
  tree: Tree,
  options: SimpleIconsGeneratorSchema,
) {
  const iconsLibPath = options.libPath ?? 'libs/simple-icons';
  const iconsSourcePath =
    options.sourcePath ?? 'node_modules/simple-icons/icons';
  const iconsDestinationPath = path.join(iconsLibPath, 'src');

  logger.info('🚀 Starting Simple Icons generation...');

  try {
    await generateIconsComponents(
      tree,
      iconsLibPath,
      iconsSourcePath,
      iconsDestinationPath,
      options,
    );

    await formatFiles(tree);

    // Log final statistics
    logger.info('✅ Simple Icons generation completed!');
    logger.info(`📊 Statistics:`);
    logger.info(`   • Total icons processed: ${generateStats.processed}`);
    logger.info(
      `   • Successfully generated: ${generateStats.processed - generateStats.failed}`,
    );
    logger.info(`   • Failed: ${generateStats.failed}`);
    logger.info(`   • Skipped: ${generateStats.skipped}`);

    if (generateStats.errors.length > 0) {
      logger.warn(`⚠️  Errors encountered:`);
      generateStats.errors.forEach((error, index) => {
        logger.warn(`   ${index + 1}. ${error}`);
      });
    }
  } catch (error) {
    logger.error('❌ Simple Icons generation failed: ' + error);
    throw error;
  }
}

async function generateIconsComponents(
  tree: Tree,
  iconsLibPath: string,
  iconsSourcePath: string,
  iconsDestinationPath: string,
  options: SimpleIconsGeneratorSchema,
) {
  // Clean up existing icons directory
  const iconsDir = path.join(workspaceRoot, iconsDestinationPath, 'icons');
  try {
    if (fs.existsSync(iconsDir)) {
      fs.rmSync(iconsDir, { recursive: true, force: true });
      logger.info('🧹 Cleaned existing icons directory');
    }
  } catch (error) {
    logger.warn(`Warning: Could not clean icons directory: ${error}`);
  }

  // Read package version and metadata
  let packageVersion: string;
  let simpleIconsJson: SimpleIcon[];

  try {
    const simpleIconsPackageJsonPath = path.join(
      workspaceRoot,
      'node_modules',
      'simple-icons',
      'package.json',
    );

    if (!fs.existsSync(simpleIconsPackageJsonPath)) {
      throw new Error(
        'simple-icons package not found. Please install it first: npm install simple-icons',
      );
    }

    const packageJson = JSON.parse(
      fs.readFileSync(simpleIconsPackageJsonPath, 'utf-8'),
    ) as { version: string; description: string };

    packageVersion = packageJson.version;
    const [major] = packageVersion.split('.');

    const simpleIconsJsonPath = path.join(
      workspaceRoot,
      'node_modules',
      'simple-icons',
      Number(major) >= 15 ? 'data' : '_data',
      'simple-icons.json',
    );

    if (!fs.existsSync(simpleIconsJsonPath)) {
      throw new Error(
        `simple-icons data file not found at: ${simpleIconsJsonPath}`,
      );
    }

    simpleIconsJson = readJsonFile(simpleIconsJsonPath);
    logger.info(
      `📦 Using simple-icons v${packageVersion} with ${simpleIconsJson.length} icons`,
    );
  } catch (error) {
    const errorMsg = `Failed to read simple-icons metadata: ${error}`;
    generateStats.errors.push(errorMsg);
    throw new Error(errorMsg);
  }

  // Get list of icon files
  const iconFiles = tree.children(iconsSourcePath);
  generateStats.total = iconFiles.length;

  if (generateStats.total === 0) {
    throw new Error(`No icon files found in: ${iconsSourcePath}`);
  }

  logger.info(`🎯 Processing ${generateStats.total} icon files...`);

  const exports: string[] = [];
  const processedIcons = new Map<string, { title: string; fileName: string }>();

  // Process icons with progress reporting
  for (let i = 0; i < iconFiles.length; i++) {
    const fileName = iconFiles[i];

    // Progress reporting
    if (i % 100 === 0 || i === iconFiles.length - 1) {
      const progress = (((i + 1) / iconFiles.length) * 100).toFixed(1);
      logger.info(`📈 Progress: ${progress}% (${i + 1}/${iconFiles.length})`);
    }

    try {
      const svgFileContent = tree.read(
        path.join(iconsSourcePath, fileName),
        'utf-8',
      );

      if (!svgFileContent) {
        throw new Error(`Could not read SVG file: ${fileName}`);
      }

      const title = getSvgTitle(svgFileContent);
      if (!title) {
        throw new Error(`No title found in SVG: ${fileName}`);
      }

      const decodedTitle = decode(title);
      const angularComponentName = titleToComponentName(decodedTitle);

      // Check for duplicates
      const componentKey = `${angularComponentName.toLowerCase()}`;
      if (processedIcons.has(componentKey)) {
        const originalIcon = processedIcons.get(componentKey)!;
        logger.warn(
          `⚠️  Duplicate icon skipped: ${decodedTitle} (${fileName}) - original: ${originalIcon.title} (${originalIcon.fileName})`,
        );
        generateStats.skipped++;
        continue;
      }
      processedIcons.set(componentKey, { title: decodedTitle, fileName });

      const svgTagContent = getSvgTagContent(svgFileContent, true);
      if (!svgTagContent.trim()) {
        throw new Error(`Empty SVG content: ${fileName}`);
      }

      const svgFileName = `${names(angularComponentName).fileName}-icon`;
      const svgClassName = generatePerfectClassName(angularComponentName);
      const svgSelector = generatePerfectSelector(
        angularComponentName,
        decodedTitle,
      );

      exports.push(`export * from './icons/${svgFileName}';`);

      const svgAttributes = getSvgAttributes(svgFileContent);

      const width = svgAttributes.width;
      const height = svgAttributes.height;
      const viewBox = svgAttributes.viewBox || '0 0 24 24'; // Default viewBox
      let fill = svgAttributes.fill;
      const stroke = svgAttributes.stroke;
      const strokeWidth = svgAttributes.strokeWidth;
      const strokeLinecap = svgAttributes.strokeLinecap;
      const strokeLinejoin = svgAttributes.strokeLinejoin;

      // Find matching icon metadata
      const simpleIcon = simpleIconsJson.find(
        (icon: SimpleIcon) =>
          icon.title === decodedTitle ||
          icon.slug === fileName.replace('.svg', '') ||
          icon.aliases?.aka?.includes(decodedTitle),
      );

      if (!simpleIcon) {
        const warningMsg = `Icon metadata not found: ${decodedTitle} (${fileName})`;
        logger.warn(`⚠️  ${warningMsg}`);
        generateStats.errors.push(warningMsg);
      }

      // Set brand color if available
      const hex = simpleIcon?.hex;
      if (hex) {
        fill = `#${hex}`;
      } else if (!fill) {
        fill = 'currentColor'; // Default fallback
      }

      const templateData = {
        svgTagContent,
        svgFileName,
        svgClassName,
        svgSelector,
        width,
        height,
        viewBox,
        fill,
        stroke,
        strokeWidth,
        strokeLinecap,
        strokeLinejoin,
        iconTitle: decodedTitle,
        brandColor: hex ? `#${hex}` : undefined,
      };

      generateFiles(
        tree,
        path.join(__dirname, 'files', 'component'),
        path.join(iconsDestinationPath, 'icons'),
        templateData,
      );

      generateStats.processed++;
    } catch (error) {
      const errorMsg = `Failed to process ${fileName}: ${error}`;
      generateStats.errors.push(errorMsg);
      generateStats.failed++;
      logger.error(`❌ ${errorMsg}`);

      if (options.strict) {
        throw new Error(errorMsg);
      }
    }
  }

  // Write exports file
  if (exports.length > 0) {
    tree.write(
      path.join(iconsDestinationPath, 'index.ts'),
      exports.sort().join('\n') + '\n',
    );
    logger.info(`📝 Generated index.ts with ${exports.length} exports`);
  } else {
    logger.warn('⚠️  No icons were successfully generated!');
  }

  // Update package.json description
  try {
    updateJson(tree, path.join(iconsLibPath, 'package.json'), (packageJson) => {
      packageJson.description = `Angular components for Simple Icons v${packageVersion} - ${generateStats.processed} icons`;
      return packageJson;
    });
  } catch (error) {
    logger.warn(`Warning: Could not update package.json: ${error}`);
  }

  // Write error report
  const errorReportPath = path.join(
    workspaceRoot,
    'apps',
    'showcase',
    'public',
    'simple-icons-generation-report.json',
  );

  const report = {
    timestamp: new Date().toISOString(),
    version: packageVersion,
    stats: generateStats,
    summary: {
      success: generateStats.processed - generateStats.failed,
      failed: generateStats.failed,
      skipped: generateStats.skipped,
      total: generateStats.total,
    },
  };

  try {
    writeJsonFile(errorReportPath, report);
    logger.info(`📋 Generation report saved to: ${errorReportPath}`);
  } catch (error) {
    logger.warn(`Warning: Could not write generation report: ${error}`);
  }
}

function validateSvgContent(svgContent: string): {
  isValid: boolean;
  error?: string;
} {
  if (!svgContent || svgContent.trim().length === 0) {
    return { isValid: false, error: 'Empty SVG content' };
  }

  // Basic SVG structure validation
  if (!svgContent.includes('<svg') || !svgContent.includes('</svg>')) {
    return {
      isValid: false,
      error: 'Invalid SVG structure - missing svg tags',
    };
  }

  // Check for at least some content inside svg
  const svgTagContent = getSvgTagContent(svgContent);
  if (!svgTagContent || svgTagContent.trim().length === 0) {
    return { isValid: false, error: 'SVG has no content' };
  }

  return { isValid: true };
}

export default simpleIconsGenerator;
