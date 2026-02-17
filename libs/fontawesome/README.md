# @semantic-icons/fontawesome

`@semantic-icons/fontawesome` enables developers to seamlessly use [Font Awesome Free](https://fontawesome.com/) icons as Angular components in [Angular](https://angular.dev) applications.

---

## ✅ Supported Versions

| @semantic-icons/fontawesome | Angular   | @fortawesome/fontawesome-free |
| --------------------------- | --------- | ----------------------------- |
| 0.x.x                       | >= 17.1.0 | 7.0.0                         |

---

## 🚀 Installation

Install the package from npm:

```sh
npm install @semantic-icons/fontawesome
```

---

## 📦 Usage

Each icon is available as an Angular standalone component that follows Angular’s naming conventions.

Example with a **solid cube icon**:

```ts
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SiCubeIcon } from '@semantic-icons/fontawesome/full/solid';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SiCubeIcon],
  template: `
    <svg class="text-blue-500 size-6" siCubeIcon></svg>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {}
```

---

## 🎨 Icon Imports

Icons can be imported from different sets, depending on your needs:

- **Full sets**
  - `@semantic-icons/fontawesome/full/brands`
  - `@semantic-icons/fontawesome/full/regular`
  - `@semantic-icons/fontawesome/full/solid`

- **Cropped sets**
  - `@semantic-icons/fontawesome/cropped/brands`
  - `@semantic-icons/fontawesome/cropped/regular`
  - `@semantic-icons/fontawesome/cropped/solid`

---

## 📝 Naming Convention

- All icons follow Angular component naming conventions.
- They are always **prefixed** with `Si` and **suffixed** with `Icon`.
  - Example: `SiCubeIcon`

---

## 📄 License

MIT © 2024–2026 Khalil LAGRIDA
