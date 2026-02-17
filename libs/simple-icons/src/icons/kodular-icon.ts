import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siKodularIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Kodular</svg:title>
    <svg:path
      d="M3.612 0a5.6 5.6 0 0 1 5.6 5.6v4.934l2.44-2.44a4.48 4.48 0 0 1 6.336 0l-6.095 6.096 8.495 8.495a4.48 4.48 0 0 1-6.336 0l-4.84-4.84V24a5.6 5.6 0 0 1-5.6-5.6Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Kodular icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#4527A0',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKodularIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#4527A0');
}
