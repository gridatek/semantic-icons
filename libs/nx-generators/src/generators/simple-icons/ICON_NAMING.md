# Simple Icons - Naming Strategy

## Overview

The simple-icons generator derives Angular component names from the **icon titles** provided by the [simple-icons](https://simpleicons.org/) metadata (`simple-icons.json`), rather than from SVG filenames.

This approach produces accurate, brand-faithful component names automatically for all 3,397+ icons without any manual mapping.

## How It Works

Each icon in the `simple-icons` npm package comes with structured metadata:

```json
{
  "title": "Stack Overflow",
  "slug": "stackoverflow",
  "hex": "F58025"
}
```

The **title** has proper word boundaries and brand-accurate casing. The **slug** is the SVG filename — a lowercase, concatenated string with no word boundaries.

The generator uses the title to produce the component name via `titleToComponentName()`, which:

1. Replaces special characters with text equivalents (`++` → `PlusPlus`, `#` → `Sharp`, `&` → `And`)
2. Converts dots to `Dot` word boundaries (`.js` → `DotJs`, `.NET` → `DotNET`)
3. Strips diacritics (`é` → `e`, `ö` → `o`)
4. Removes remaining non-alphanumeric characters
5. Splits on word boundaries and capitalizes the first letter of each word, preserving the rest of the brand's original casing

## Naming Examples

| Icon Title | Component Class | Selector | File |
|---|---|---|---|
| GitHub | `SiGitHubIcon` | `siGitHubIcon` | `git-hub-icon.ts` |
| Stack Overflow | `SiStackOverflowIcon` | `siStackOverflowIcon` | `stack-overflow-icon.ts` |
| Node.js | `SiNodeDotJsIcon` | `siNodeDotJsIcon` | `node-dot-js-icon.ts` |
| C++ | `SiCPlusPlusIcon` | `siCPlusPlusIcon` | `cplus-plus-icon.ts` |
| F# | `SiFSharpIcon` | `siFSharpIcon` | `fsharp-icon.ts` |
| .NET | `SiDotNETIcon` | `siDotNETIcon` | `dot-net-icon.ts` |
| PayPal | `SiPayPalIcon` | `siPayPalIcon` | `pay-pal-icon.ts` |
| WhatsApp | `SiWhatsAppIcon` | `siWhatsAppIcon` | `whats-app-icon.ts` |
| AT&T | `SiATAndTIcon` | `siATAndTIcon` | `at-and-t-icon.ts` |
| Aeroméxico | `SiAeromexicoIcon` | `siAeromexicoIcon` | `aeromexico-icon.ts` |

## Special Character Handling

| Character | Replacement | Example |
|---|---|---|
| `++` | `PlusPlus` | C++ → CPlusPlus |
| `#` | `Sharp` | F# → FSharp |
| `&` | `And` | AT&T → ATAndT |
| `.` | `Dot` | Node.js → NodeDotJs |
| `::` | *(removed)* | Code::Blocks → CodeBlocks |
| `'` | *(removed)* | Byju's → Byjus |
| `/` | *(removed)* | /e/ → E |
| Diacritics | ASCII equivalent | Citroën → Citroen |

## Duplicate Title Disambiguation

Seven icons in simple-icons share the same title (e.g., two different brands both named "Backstage"). The generator handles this by:

1. Grouping icons by their title-derived component name
2. Identifying the **primary** icon (shortest slug) — keeps the base name
3. Appending a **suffix** derived from the slug difference to secondary icons

| Title | Slug | Component Name |
|---|---|---|
| Backstage | `backstage` | `SiBackstageIcon` |
| Backstage | `backstage_casting` | `SiBackstageCastingIcon` |
| Mongoose | `mongoose` | `SiMongooseIcon` |
| Mongoose | `mongoosedotws` | `SiMongooseDotWsIcon` |
| Spring | `spring` | `SiSpringIcon` |
| Spring | `spring_creators` | `SiSpringCreatorsIcon` |

## Previous Approach

Previously, the generator derived names from SVG filenames (slugs) using a `fileNameToComponentName()` function backed by a manually-maintained mapping table (`filename-mappings.ts`) with 230+ entries. This had several issues:

- **Incomplete coverage**: Only 230 of 3,397 icons had manual mappings; the rest used a basic auto-conversion that couldn't detect word boundaries in concatenated slugs (e.g., `stackoverflow` → `Stackoverflow` instead of `StackOverflow`)
- **Manual maintenance burden**: Every new icon or rename required updating the mapping table
- **Inconsistent quality**: Unmapped icons got degraded names
- **Slow metadata lookups**: Used linear `Array.find()` scans instead of `Map` lookups

The title-based approach eliminates all of these problems.
