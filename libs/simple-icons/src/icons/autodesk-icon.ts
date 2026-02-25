import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siAutodeskIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Autodesk</svg:title>
    <svg:path
      d="m.129 20.202 14.7-9.136h7.625c.235 0 .445.188.445.445 0 .21-.092.305-.21.375l-7.222 4.323c-.47.283-.633.845-.633 1.265l-.008 2.725H24V4.362a.561.561 0 0 0-.585-.562h-8.752L0 12.893V20.2h.129z"
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
export class SiAutodeskIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Autodesk icon');
  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
