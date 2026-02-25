import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siCertificateLineIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 2C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20ZM5 20H19V4H5V20ZM13.4697 11.9775L16.7549 12.4551L14.3779 14.7725L14.9385 18.0449L12 16.5L9.06055 18.0449L9.62207 14.7725L7.24512 12.4551L10.5303 11.9775L12 9L13.4697 11.9775ZM16 8H8V6H16V8Z"
    />
  `,
  host: {
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCertificateLineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
