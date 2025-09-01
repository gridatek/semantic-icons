import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sunrise-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Sunrise</svg:title>
    <svg:path
      d="M12.0011 0A12 12 0 1 0 24 11.9989 12.0114 12.0114 0 0 0 12.0012 0m0 2.4639a9.53 9.53 0 0 1 9.5134 8.8891 9.53 9.53 0 0 1-.8622 4.6487H3.349a9.53 9.53 0 0 1 .6162-9.14 9.53 9.53 0 0 1 8.036-4.398"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Sunrise icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#DA291C',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSunriseIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#DA291C');
}
