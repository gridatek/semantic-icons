# @semantic-icons/fontawesome

`@semantic-icons/fontawesome` helps developers to use [Font Awesome Free icons](https://fontawesome.com/) inside [Angular](https://angular.dev) projects.

## Supported versions

| @semantic-icons/fontawesome | Angular   | @fortawesome/fontawesome-free |
| --------------------------- | --------- | ----------------------------- |
| 0.x.x                       | >= 17.1.0 | 7.0.0                         |

## Usage

First, install `@semantic-icons/fontawesome` from npm:

```sh
npm install @semantic-icons/fontawesome
```

Now each icon can be imported individually as an Angular component:

```js
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SiCubeIcon } from '@semantic-icons/fontawesome/solid';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SiCubeIcon],
  template: `
    <svg class="text-blue-500 size-6" si-cube-icon></svg>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {}
```

The icons can be imported from `@semantic-icons/fontawesome`.

Icons use the Angular naming convention and are always prefixed with the word `si` and suffixed with the word `icon`.

## License

MIT © 2024-2025 Khalil LAGRIDA
