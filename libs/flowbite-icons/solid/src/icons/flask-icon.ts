import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-flask-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      fill-rule="evenodd"
      d="M8.05005 2c-.55229 0-1 .44772-1 1s.44771 1 1 1h1v3.31532c-2.69858 1.16334-5 3.63038-5 6.88468 0 4.3349 3.60924 7.8 7.99995 7.8 4.3908 0 8-3.4651 8-7.8 0-3.2543-2.3014-5.72134-5-6.88468V4h1c.5523 0 1-.44772 1-1s-.4477-1-1-1H8.05005ZM11.05 8V4h2v4c0 .42712.2713.8071.6753.9458 2.3906.82083 4.2201 2.7442 4.3204 5.0542H6.05438c.10031-2.31 1.92977-4.23337 4.32042-5.0542.404-.1387.6752-.51868.6752-.9458Z"
      clip-rule="evenodd"
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
export class SiFlaskIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
