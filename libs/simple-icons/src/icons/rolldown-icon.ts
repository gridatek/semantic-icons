import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siRolldownIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Rolldown</svg:title>
    <svg:path
      d="M17.657 3.18H9.09L7.792 4.978h8.537ZM20.005 0h-8.62L10.2 1.641h8.594zm1.643 8.188h-7.69l1.186-1.604-8.496-.02-4.15 5.752h8.065l-3.562 5.377H.916L8.306 24l14.778-6.307h-7.313z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Rolldown icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#FF7E17',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRolldownIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FF7E17');
}
