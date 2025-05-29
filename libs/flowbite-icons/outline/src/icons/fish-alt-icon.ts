import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-fish-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 12c0 1.6 3.35786 4 7.5 4 4.1421 0 6.9231-3.2 7.5-4-.5769-.8-3.3579-4-7.5-4C9.35786 8 6 10.4 6 12Zm0 0L3 9m3 3-3 3m12.9866-3.3723h.01m-1.9995-3.61229c-1.7265 3.30199-1.7113 5.02539-.0015 7.96929m-4.6104-.7956L7.7 17.4c-.49443.6592-.02401 1.6.80004 1.6H10c1 0 2.7576-3.0256 2.7576-3.0256M9 5l3.056 3.09696"
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
export class SiFishAltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
