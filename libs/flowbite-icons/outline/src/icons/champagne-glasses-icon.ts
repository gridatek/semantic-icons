import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-champagne-glasses-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M7 15c1.65685 0 3-1.3431 3-3V6H4v6c0 1.6569 1.34315 3 3 3Zm0 0v5m-2 0h4M4 9h6m6.6083 4.4863c1.5775-.5067 2.4456-2.1962 1.939-3.77367L16.7126 4 11 5.83463l1.8346 5.71267c.5066 1.5775 2.1962 2.4456 3.7737 1.939Zm0 0 1.5288 4.7605m-1.9042.6115 3.8084-1.2231m-8.124-8.94426 5.7126-1.83463"
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
export class SiChampagneGlassesIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
