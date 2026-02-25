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
      d="M21.652 0c.514 0 .796.6.466.998l-5.616 6.74c-.662.793-.098 1.997.934 1.997h5.433c.516 0 .797.6.467.998L12.467 23.775a.6.6 0 0 1-.468.225.6.6 0 0 1-.468-.225L.661 10.733a.609.609 0 0 1 .468-.998H6.56c1.032 0 1.595-1.204.937-1.997L1.88.998A.608.608 0 0 1 2.346 0Z"
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
    'data-brand-color': '#FF4100',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRolldownIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Rolldown icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FF4100');
}
