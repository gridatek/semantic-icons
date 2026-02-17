# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Semantic Icons is a monorepo that provides Angular-compatible icon libraries from popular icon sets. The project uses Nx for workspace management and builds individual npm packages for different icon sets.

## Commands

### Development

- `nx serve showcase` - Start the showcase application (development server)
- `nx build showcase` - Build the showcase application
- `nx test <project>` - Run tests for a specific project
- `nx lint <project>` - Lint a specific project or use `nx lint` for all projects

### Icon Library Management

- `nx build <lib-name>` - Build a specific icon library (e.g., `nx build lucide-icons`)
- `nx build` - Build all libraries
- `nx release` - Release packages (uses independent versioning for libs)

### Code Quality

- `npm run prepare` - Install husky git hooks
- `prettier --write .` - Format all files
- `nx affected:build` - Build only affected projects
- `nx affected:test` - Test only affected projects
- `nx affected:lint` - Lint only affected projects

## Architecture

### Monorepo Structure

- `libs/` - Icon library packages, each exports Angular components for individual icons
- `apps/showcase/` - Demo application showcasing all icon libraries
- `libs/nx-generators/` - Custom Nx executors and generators for the project

### Icon Library Architecture

Each icon library (e.g., `libs/lucide-icons/`) follows this pattern:

- Individual icon components in `src/icons/` directory
- Each icon is a standalone Angular component with selector pattern `svg[siIconNameIcon]` (camelCase)
- All icons export from `src/index.ts` with barrel exports
- Components use Angular signals for inputs (width, height, viewBox, fill, stroke, etc.)
- Host bindings for SVG attributes with configurable inputs
- Prefix: `si` (semantic icons)

### Icon Component Pattern

```typescript
@Component({
  selector: 'svg[siIconNameIcon]',
  standalone: true,
  template: `
    <svg:path d="..." />
  `,
  host: {
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    // ... other SVG attributes
  },
})
export class SiIconNameIcon {
  readonly width = input<string | number>('24');
  readonly height = input<string | number>('24');
  // ... other configurable properties
}
```

### Build System

- Uses Nx with Angular build tools
- `@nx/angular:package` executor for library builds
- Custom `@semantic-icons/nx-generators:copy-license` executor to copy LICENSE to dist
- Each library has implicit dependency on `nx-generators`
- Independent release versioning with release tags: `release/{projectName}/{version}`

### Available Icon Libraries

- `@semantic-icons/heroicons` - Tailwind's Heroicons
- `@semantic-icons/tabler-icons` - Tabler Icons
- `@semantic-icons/lucide-icons` - Lucide Icons (Feather Icons successor)
- `@semantic-icons/bootstrap-icons` - Bootstrap Icons
- `@semantic-icons/flowbite-icons` - Flowbite UI Icons
- `@semantic-icons/lineicons` - Line Icons
- `@semantic-icons/flag-icons` - Country Flags
- `@semantic-icons/circle-flags` - Circular Country Flags
- `@semantic-icons/simple-icons` - Brand/Social Media Icons

### Development Notes

- All libraries are standalone Angular components requiring no additional setup
- Icons are tree-shakeable for optimal bundle size
- Accessible by default with proper SVG structure
- Uses Angular 20+ with modern signal-based inputs
- Husky pre-commit hooks run prettier formatting
- Verdaccio for local package testing
