import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siNotesnookIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Notesnook</svg:title>
    <svg:path
      d="M7.2 0C3.21 0 0 3.21 0 7.2v9.6C0 20.79 3.21 24 7.2 24h9.6c3.99 0 7.2-3.21 7.2-7.2V7.2C24 3.21 20.79 0 16.8 0ZM6.036 3.438H12a5.965 5.965 0 0 1 5.963 5.964c-.003 1.8.005 3.598-.004 5.397l-2.094-.875V9.402a3.868 3.868 0 0 0-3.713-3.863 3.866 3.866 0 0 0-2.718.973 3.866 3.866 0 0 0-1.29 2.584c-.02.532-.01 1.065-.01 1.597l-2.097-.877Zm0 8.238 2.098.877v2.043c0 .55.116 1.096.344 1.597a3.875 3.875 0 0 0 3.353 2.266c.027.005.188 0 .334 0a3.876 3.876 0 0 0 3.533-2.744l1.946.814a5.962 5.962 0 0 1-6.622 3.951 5.966 5.966 0 0 1-4.986-5.882Z"
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
    'data-brand-color': '#000000',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNotesnookIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Notesnook icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
