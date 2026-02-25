import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siFontbaseIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>FontBase</svg:title>
    <svg:path
      d="M23.079 13.996c-2.702-2.771-5.702-5.703-8.105-8.103-1.62-1.621-4.284-1.621-5.943 0-2.97 2.963-5.248 5.21-8.104 8.066a3.12 3.12 0 0 0 0 4.437 3.12 3.12 0 0 0 4.437 0l2.2-2.2 2.2 2.2a3.12 3.12 0 0 0 4.438 0 3.12 3.12 0 0 0 0-4.438l4.4 4.4a3.12 3.12 0 0 0 4.438 0c1.274-1.16 1.274-3.165.039-4.362z"
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
    'data-brand-color': '#3D03A7',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFontbaseIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('FontBase icon');
  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#3D03A7');
}
