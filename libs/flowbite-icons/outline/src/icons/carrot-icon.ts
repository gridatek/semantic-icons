import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-carrot-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="2"
      d="M16.0001 7.99997c-1.629-1.629-3.9007-1.91488-6.06614.25057C7.76851 10.416 2.82151 18.0286 4.4505 19.6576c1.629 1.629 9.2416-3.318 11.4071-5.4834 2.0932-2.0933 1.7715-4.54524.1425-6.17423Zm0 0 3.2595-3.15144m-3.2595 3.15144V4m0 3.99997 4 .00002m-3.7978 5.80211-2.1999-2.2155M8.30216 10.211l2.07194 2.0421m-1.25873 3.1838 2.11173 2.1633"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCarrotIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
