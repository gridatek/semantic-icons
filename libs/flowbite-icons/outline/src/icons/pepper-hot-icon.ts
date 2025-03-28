import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-pepper-hot-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M11 11c1.4996-3.03293 3.1022-3.84719 4.5-3.50002 1.3978.34717 2.2863.9906 2.6776 2.60672.4633 2.1164-1.7429 4.9773-5.8373 8.2081-1.2064.9132-3.49445 2.0175-5.05111 2.6995-.69706.2941-1.59437.0537-2.09791-.6308-.50355-.6845-.3913-1.6162.24626-2.201.39377-.444.75319-.7599 1.11261-1.0758C8.1847 15.6213 9.50034 14.033 11 11Zm0 0h3v2h3m.1576-5.48485 1.2592-2.13563c.4624-.70043.1558-1.60694-.5447-2.0694-.7004-.46246-1.6069-.1558-2.0694.54463l-.0812.04692"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPepperHotIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
