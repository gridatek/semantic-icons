import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-icecream-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      d="M6.08296 7C6.55904 4.16229 9.027 2 12 2c3.3137 0 6 2.68629 6 6h-2.5C14.1193 8 13 9.11929 13 10.5c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5V10c0-1.65685-1.3431-3-3-3H6.08296Z"
    />
    <svg:path
      fill="currentColor"
      d="M6 9v5c0 1.1046.89543 2 2 2h3v5c0 .5523.4477 1 1 1s1-.4477 1-1v-5h3c1.1046 0 2-.8954 2-2v-4h-2.5c-.2761 0-.5.2239-.5.5 0 1.3807-1.1193 2.5-2.5 2.5S10 11.8807 10 10.5V10c0-.55228-.44772-1-1-1H6Z"
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
export class SiIcecreamIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
