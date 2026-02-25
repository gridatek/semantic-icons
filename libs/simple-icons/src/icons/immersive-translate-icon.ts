import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siImmersiveTranslateIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Immersive Translate</svg:title>
    <svg:path
      d="M8.607 4.008h-1.75v1.749H3.539v5.85h3.318v2.534h1.75v-2.533h3.317V5.757H8.607Zm-1.75 3.498H5.289V9.86h1.568Zm1.75 2.353V7.506h1.568V9.86Zm12.065 10.133-3.68-9.229h-1.75l-3.68 9.23h1.87l.954-2.474h3.462l.954 2.473zm-3.499-4.222-1.056-2.738-1.056 2.738zm-9.471 4.222h2.594v-1.749H7.702a1.57 1.57 0 0 1-1.569-1.568v-1.75h-1.75v1.75a3.32 3.32 0 0 0 3.319 3.317m5.851-15.14v1.75h2.594c.867 0 1.569.702 1.569 1.568v1.81h1.75V8.17a3.32 3.32 0 0 0-3.319-3.318zM0 3.75A3.75 3.75 0 0 1 3.75 0h16.5A3.75 3.75 0 0 1 24 3.75v16.5A3.75 3.75 0 0 1 20.25 24H3.75A3.75 3.75 0 0 1 0 20.25Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#EA4C89',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiImmersiveTranslateIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Immersive Translate icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#EA4C89');
}
