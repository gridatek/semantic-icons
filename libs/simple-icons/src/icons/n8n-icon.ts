import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siN8nIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>n8n</svg:title>
    <svg:path
      d="M4.8 16.8c.45 0 .6-.15.6-.6V15c0-1.8.6-2.4 2.4-2.4H9c1.8 0 2.4.6 2.4 2.4v1.2c0 .45.15.6.6.6s.6-.15.6-.6V15c0-1.8.6-2.4 2.4-2.4h1.2c1.8 0 2.4.6 2.4 2.4v1.2c0 .45.15.6.6.6s.6-.15.6-.6V15c0-1.8.6-2.4 2.4-2.4h1.2c.45 0 .6-.15.6-.6s-.15-.6-.6-.6h-1.2c-1.8 0-2.4-.6-2.4-2.4V7.8c0-.45-.15-.6-.6-.6s-.6.15-.6.6V9c0 1.8-.6 2.4-2.4 2.4H15c-1.8 0-2.4-.6-2.4-2.4V7.8c0-.45-.15-.6-.6-.6s-.6.15-.6.6V9c0 1.8-.6 2.4-2.4 2.4H7.8c-1.8 0-2.4-.6-2.4-2.4V7.8c0-.45-.15-.6-.6-.6s-.6.15-.6.6V9c0 1.8-.6 2.4-2.4 2.4H.6c-.45 0-.6.15-.6.6s.15.6.6.6h1.2c1.8 0 2.4.6 2.4 2.4v1.2c0 .45.15.6.6.6"
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
    'data-brand-color': '#FF91AC',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiN8nIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('n8n icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FF91AC');
}
