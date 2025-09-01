import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-airbrake-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Airbrake</svg:title>
    <svg:path
      d="M15.815.576 24 23.424h-6.072L10.679.576Zm-6.456 0 1.872 5.929-2.447 7.751c1.038.183 2.09.28 3.144.288.576 0 1.175-.048 1.824-.096l1.151 3.912a28.7 28.7 0 0 1-2.951.169 26.568 26.568 0 0 1-4.32-.361L5.88 23.424H0L8.181.576Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Airbrake icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#FFA500',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAirbrakeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FFA500');
}
