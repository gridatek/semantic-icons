import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siDifyIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Dify</svg:title>
    <svg:path
      d="m22.417 9.334-1.333 4.333-1.334-4.333h-1.583L20.1 14.94c.2.583-.14 1.06-.756 1.06h-.678v1.334h.996c.869 0 1.65-.55 1.945-1.367L24 9.334ZM2.833 6.667H0v8.666h2.833c3.5 0 4.5-2 4.5-4.333s-1-4.334-4.5-4.334zM2.866 14H1.6V8h1.266c2.013 0 2.867.988 2.867 3s-.854 3-2.867 3m11-5.267v.6h-1.532v1.334h1.533V14h-2.534V9.334H8v1.334h1.867V14h-2.2v1.334h10V14h-2.332v-3.333h2.333V9.334h-2.333V8h2.333V6.667h-1.733a2.07 2.07 0 0 0-2.067 2.067Zm-3.266-.2c.681 0 .933-.417.933-.933 0-.515-.252-.933-.933-.933-.68 0-.934.418-.934.933s.253.934.934.934"
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
    'data-brand-color': '#0033FF',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDifyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Dify icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#0033FF');
}
