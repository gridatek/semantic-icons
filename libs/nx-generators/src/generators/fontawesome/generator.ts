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

  //1-1
  const croppedBrandsIconsSourcePath =
    'node_modules/@fortawesome/fontawesome-free/svgs/brands';
  const croppedBrandsIconsDestinationPath = path.join(
    iconsDestinationPath,
    'cropped',
    'brands',
    'src',
  );

  generateIconsComponents(
    tree,
    croppedBrandsIconsSourcePath,
    croppedBrandsIconsDestinationPath,
  );

  //1-2
  const croppedRegularIconsSourcePath =
    'node_modules/@fortawesome/fontawesome-free/svgs/regular';
  const croppedRegularIconsDestinationPath = path.join(
    iconsDestinationPath,
    'cropped',
    'regular',
    'src',
  );

  generateIconsComponents(
    tree,
    croppedRegularIconsSourcePath,
    croppedRegularIconsDestinationPath,
  );

  //1-3
  const croppedSolidIconsSourcePath =
    'node_modules/@fortawesome/fontawesome-free/svgs/solid';
  const croppedSolidIconsDestinationPath = path.join(
    iconsDestinationPath,
    'cropped',
    'solid',
    'src',
  );

  generateIconsComponents(
    tree,
    croppedSolidIconsSourcePath,
    croppedSolidIconsDestinationPath,
  );

  //2-1
  const fullBrandsIconsSourcePath =
    'node_modules/@fortawesome/fontawesome-free/svgs-full/brands';
  const fullBrandsIconsDestinationPath = path.join(
    iconsDestinationPath,
    'full',
    'brands',
    'src',
  );

  generateIconsComponents(
    tree,
    fullBrandsIconsSourcePath,
    fullBrandsIconsDestinationPath,
  );

  //2-2
  const fullRegularIconsSourcePath =
    'node_modules/@fortawesome/fontawesome-free/svgs-full/regular';
  const fullRegularIconsDestinationPath = path.join(
    iconsDestinationPath,
    'full',
    'regular',
    'src',
  );

  generateIconsComponents(
    tree,
    fullRegularIconsSourcePath,
    fullRegularIconsDestinationPath,
  );

  //2-3
  const fullSolidIconsSourcePath =
    'node_modules/@fortawesome/fontawesome-free/svgs-full/solid';
  const fullSolidIconsDestinationPath = path.join(
    iconsDestinationPath,
    'full',
    'solid',
    'src',
  );

  generateIconsComponents(
    tree,
    fullSolidIconsSourcePath,
    fullSolidIconsDestinationPath,
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
