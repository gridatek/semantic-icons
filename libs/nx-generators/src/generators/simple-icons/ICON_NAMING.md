# Simple Icons - Naming Strategy

## Overview

The simple-icons generator derives Angular component names from the **icon titles** provided by the [simple-icons](https://simpleicons.org/) metadata (`simple-icons.json`), rather than from SVG filenames.

This approach produces accurate component names automatically for all 3,397+ icons without any manual mapping.

## How It Works

Each icon in the `simple-icons` npm package comes with structured metadata:

```json
{
  "title": "Stack Overflow",
  "slug": "stackoverflow",
  "hex": "F58025"
}
```

The **title** has proper word boundaries. The **slug** is the SVG filename — a lowercase, concatenated string with no word boundaries.

The generator uses the title to produce the component name via `titleToComponentName()`, which:

1. Replaces special characters with text equivalents (`++` → `Plusplus`, `#` → `Sharp`, `&` → `And`)
2. Converts dots to `Dot` word boundaries (`.js` → `DotJs`, `.NET` → `DotNet`)
3. Strips diacritics (`é` → `e`, `ö` → `o`)
4. Removes remaining non-alphanumeric characters
5. Splits on word boundaries and converts each word to camelCase (first letter uppercase, rest lowercase)

## Naming Examples

| Icon Title     | Component Class       | Selector              | File                     |
| -------------- | --------------------- | --------------------- | ------------------------ |
| GitHub         | `SiGithubIcon`        | `siGithubIcon`        | `github-icon.ts`         |
| Stack Overflow | `SiStackOverflowIcon` | `siStackOverflowIcon` | `stack-overflow-icon.ts` |
| Node.js        | `SiNodeDotJsIcon`     | `siNodeDotJsIcon`     | `node-dot-js-icon.ts`    |
| C++            | `SiCplusplusIcon`     | `siCplusplusIcon`     | `cplusplus-icon.ts`      |
| F#             | `SiFsharpIcon`        | `siFsharpIcon`        | `fsharp-icon.ts`         |
| .NET           | `SiDotNetIcon`        | `siDotNetIcon`        | `dot-net-icon.ts`        |
| PayPal         | `SiPaypalIcon`        | `siPaypalIcon`        | `paypal-icon.ts`         |
| WhatsApp       | `SiWhatsappIcon`      | `siWhatsappIcon`      | `whatsapp-icon.ts`       |
| AT&T           | `SiAtAndTIcon`        | `siAtAndTIcon`        | `at-and-t-icon.ts`       |
| Aeroméxico     | `SiAeromexicoIcon`    | `siAeromexicoIcon`    | `aeromexico-icon.ts`     |

## Special Character Handling

| Character  | Replacement      | Example                   |
| ---------- | ---------------- | ------------------------- |
| `++`       | `Plusplus`       | C++ → Cplusplus           |
| `#`        | `Sharp`          | F# → Fsharp               |
| `&`        | `And`            | AT&T → AtAndT             |
| `.`        | `Dot`            | Node.js → NodeDotJs       |
| `::`       | _(removed)_      | Code::Blocks → Codeblocks |
| `'`        | _(removed)_      | Byju's → Byjus            |
| `/`        | _(removed)_      | /e/ → E                   |
| Diacritics | ASCII equivalent | Citroën → Citroen         |

## Duplicate Title Disambiguation

Seven icons in simple-icons share the same title (e.g., two different brands both named "Backstage"). The generator handles this by:

1. Grouping icons by their title-derived component name
2. Identifying the **primary** icon (shortest slug) — keeps the base name
3. Appending a **suffix** derived from the slug difference to secondary icons

| Title     | Slug                | Component Name           |
| --------- | ------------------- | ------------------------ |
| Backstage | `backstage`         | `SiBackstageIcon`        |
| Backstage | `backstage_casting` | `SiBackstageCastingIcon` |
| Mongoose  | `mongoose`          | `SiMongooseIcon`         |
| Mongoose  | `mongoosedotws`     | `SiMongooseDotWsIcon`    |
| Spring    | `spring`            | `SiSpringIcon`           |
| Spring    | `spring_creators`   | `SiSpringCreatorsIcon`   |
