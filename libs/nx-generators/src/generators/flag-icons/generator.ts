import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  workspaceRoot,
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { FlagIconsGeneratorSchema } from './schema';

export async function flagIconsGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: FlagIconsGeneratorSchema,
) {
  const iconsDestinationPath = 'libs/flag-icons';

  //1
  const squareIconsSourcePath = 'node_modules/flag-icons/flags/1x1';
  const squareIconsDestinationPath = path.join(
    iconsDestinationPath,
    'square',
    'src',
  );

  generateIconsComponents(
    tree,
    squareIconsSourcePath,
    squareIconsDestinationPath,
  );

  //2
  const rectangleIconsSourcePath = 'node_modules/flag-icons/flags/4x3';
  const rectangleIconsDestinationPath = path.join(
    iconsDestinationPath,
    'rectangle',
    'src',
  );

  generateIconsComponents(
    tree,
    rectangleIconsSourcePath,
    rectangleIconsDestinationPath,
  );

  await formatFiles(tree);
}

function generateIconsComponents(
  tree: Tree,
  iconsSourcePath: string,
  iconsDestinationPath: string,
) {
  //remove icons
  fs.rmSync(path.join(workspaceRoot, iconsDestinationPath, 'icons'), {
    recursive: true,
    force: true,
  });

  const exports = [];
  tree.children(iconsSourcePath).forEach((fileName) => {
    const name = path.parse(fileName).name;

    const svgContent1 = tree.read(
      path.join(iconsSourcePath, fileName),
      'utf-8',
    );

    const re = /(<svg)/;
    const svgContent = svgContent1.replace(re, '$1 [class]="class()"');

    const svgClassName = `Svg${names(name).className}FlagIcon`;
    const svgFileName = `svg-${names(name).fileName}-flag-icon`;
    const svgSelector = `svg-${names(name).fileName}-flag-icon`;

    exports.push(`export * from './icons/${svgFileName}';`);

    const o = { svgContent, svgClassName, svgFileName, svgSelector };

    generateFiles(
      tree,
      path.join(__dirname, '..', 'heroicons', 'files', 'component'),
      path.join(iconsDestinationPath, 'icons'),
      o,
    );
  });

  tree.write(path.join(iconsDestinationPath, 'index.ts'), exports.join('\r\n'));
}

export default flagIconsGenerator;
