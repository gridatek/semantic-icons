import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-icecream-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 6c0-1.65685 1.3431-3 3-3s3 1.34315 3 3M9 6c0 1.04349.53275 1.96254 1.3411 2.5M9 6C7.34315 6 6 7.34315 6 9c0 1.6569 1.34315 3 3 3m6.3893 0c1.6568 0 3-1.3431 3-3 0-1.65685-1.3432-3-3-3-.6134 0-1.1838.18408-1.6589.5M8 12h8l-4 9-4-9Z"
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
export class SiIcecreamAltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
