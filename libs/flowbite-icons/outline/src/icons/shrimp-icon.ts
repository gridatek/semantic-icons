import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-shrimp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M13.5241 12.4701H8c-1.65685 0-3-1.3432-3-3.00001V8.00003h5m3.5241 4.47007c1.6367 0 2.733 1.6825 2.072 3.1798-.3623.8206-1.1749 1.3501-2.072 1.3501H11c-1.10457 0-2 .8955-2 2v1h6.5m-1.9759-7.5299L15.5 7.76388m-5.5.23615c1.8455-1.2511 3.0772-1.40822 5.5-.23615m-5.5.23615v4.47007L8 14m7.5-6.23612c3.1804-.24503 5.5559 2.36222 4.7544 5.44972-.1054.4062-.2247.8398-.3594 1.3107.0165.8114-.0058 1.4881-.0632 2.0873C19.6315 18.7026 17.6006 20 15.5 20m0 0-1.2042-3.1354M15.6675 14h4.3753M10 4.00003H6c-1.10457 0-2 .89543-2 2s.89543 2 2 2"
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
export class SiShrimpIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
