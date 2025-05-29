import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hotdog-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m11.5 8.00003 1-1M11.5 12.5l1-1m-1 5.5 1-1M9 20V4.00003h-.5c-1.933 0-3.5 1.567-3.5 3.5V16.5C5 18.433 6.567 20 8.5 20H9Zm6 0V4.00003h.5c1.933 0 3.5 1.567 3.5 3.5V16.5c0 1.933-1.567 3.5-3.5 3.5H15Zm0-2V6.00003c0-1.65685-1.3431-3-3-3s-3 1.34315-3 3V18c0 1.6569 1.3431 3 3 3s3-1.3431 3-3Z"
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
export class SiHotdogIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
