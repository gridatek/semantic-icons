import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  workspaceRoot,
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { getSvgAttributes, getSvgTagContent } from '../../utils';
import { FontawesomeGeneratorSchema } from './schema';

export async function fontawesomeGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: FontawesomeGeneratorSchema,
) {
  const iconsDestinationPath = 'libs/fontawesome';

  //1
  const brandsIconsSourcePath =
    'node_modules/@fortawesome/fontawesome-free/svgs/brands';
  const brandsIconsDestinationPath = path.join(
    iconsDestinationPath,
    'brands',
    'src',
  );

  generateIconsComponents(
    tree,
    brandsIconsSourcePath,
    brandsIconsDestinationPath,
  );

  //2
  const regularIconsSourcePath =
    'node_modules/@fortawesome/fontawesome-free/svgs/regular';
  const regularIconsDestinationPath = path.join(
    iconsDestinationPath,
    'regular',
    'src',
  );

  generateIconsComponents(
    tree,
    regularIconsSourcePath,
    regularIconsDestinationPath,
  );

  //3
  const solidIconsSourcePath =
    'node_modules/@fortawesome/fontawesome-free/svgs/solid';
  const solidIconsDestinationPath = path.join(
    iconsDestinationPath,
    'solid',
    'src',
  );

  generateIconsComponents(
    tree,
    solidIconsSourcePath,
    solidIconsDestinationPath,
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

    const svgFileContent = tree.read(
      path.join(iconsSourcePath, fileName),
      'utf-8',
    );

    const svgTagContent = getSvgTagContent(svgFileContent);

    const svgFileName = `${names(name).fileName}-icon`;
    const svgClassName = `Si${names(name).className}Icon`;
    const svgSelector = `si-${names(name).fileName}-icon`;

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

    //Default values for attributes
    if (!fill) {
      fill = 'currentColor';
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
}

export default fontawesomeGenerator;
