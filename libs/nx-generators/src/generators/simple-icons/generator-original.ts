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
import { addSpaces, titleToComponentName } from './title-to-component-name';

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
    logger.error('❌ Simple Icons generation failed:', error);
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
  //remove icons
  fs.rmSync(path.join(workspaceRoot, iconsDestinationPath, 'icons'), {
    recursive: true,
    force: true,
  });

  const simpleIconsPackageJsonPath = path.join(
    workspaceRoot,
    'node_modules',
    'simple-icons',
    'package.json',
  );
  const packageJson = JSON.parse(
    fs.readFileSync(simpleIconsPackageJsonPath, 'utf-8'),
  ) as { version: string; description: string };
  const packageVersion = packageJson.version;
  const [major] = packageVersion.split('.');
  const simpleIconsJsonPath = path.join(
    workspaceRoot,
    'node_modules',
    'simple-icons',
    Number(major) >= 15 ? 'data' : '_data',
    'simple-icons.json',
  );
  const simpleIconsJson: SimpleIcon[] = readJsonFile(simpleIconsJsonPath);

  const exports = [];
  tree.children(iconsSourcePath).forEach((fileName) => {
    const svgFileContent = tree.read(
      path.join(iconsSourcePath, fileName),
      'utf-8',
    );

    const title = getSvgTitle(svgFileContent);
    const decodedTitle = decode(title);
    const angularComponentName = titleToComponentName(decodedTitle);

    const svgTagContent = getSvgTagContent(svgFileContent);

    const svgFileName = `${names(angularComponentName).fileName}-icon`;
    const svgClassName = `Si${names(angularComponentName).className}Icon`;
    const svgSelector = `si-${names(addSpaces(angularComponentName)).fileName}-icon`;

    exports.push(`export * from './icons/${svgFileName}';`);

    const svgAttributes = getSvgAttributes(svgFileContent);

    const width = svgAttributes.width;
    const height = svgAttributes.height;
    const viewBox = svgAttributes.viewBox;
    let fill = svgAttributes.fill;
    const stroke = svgAttributes.stroke;
    const strokeWidth = svgAttributes.strokeWidth;
    const strokeLinecap = svgAttributes.strokeLinecap;
    const strokeLinejoin = svgAttributes.strokeLinejoin;

    //Colors

    const simpleIcon = simpleIconsJson.find(
      (icon: SimpleIcon) => icon.title === decodedTitle,
    );

    if (!simpleIcon) {
      console.log(`Cannot find Icon with Title ${title}`);
      simpleIconTitle.push(title);
    }

    const hex = simpleIcon?.hex;

    if (hex) {
      fill = `#${hex}`;
    }

    const o = {
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
    };

    generateFiles(
      tree,
      path.join(__dirname, 'files', 'component'),
      path.join(iconsDestinationPath, 'icons'),
      o,
    );
  });

  tree.write(path.join(iconsDestinationPath, 'index.ts'), exports.join('\r\n'));

  updateJson(tree, path.join(iconsLibPath, 'package.json'), (packageJson) => {
    packageJson.description = `Icons generated based on simple-icons v${packageVersion}`;
    return packageJson;
  });

  writeJsonFile(
    path.join(
      workspaceRoot,
      'apps',
      'showcase',
      'public',
      'simple-icons-color-issue.json',
    ),
    simpleIconTitle,
  );
}

export default simpleIconsGenerator;
