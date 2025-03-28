import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-jar-wheat-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M16 6H8m8 0s3 2.5 3 5v8.002C19 20.6589 17.6569 22 16 22H8c-1.65685 0-3-1.3411-3-2.998V11c0-2.5 3-5 3-5m8 0V3H8v3m4 3v10M6 6h12m-4.8345 9.7454c-.323.2567-.9647 1.1716-.9257 1.2279.039.0563 1.0454-.4292 1.4008-.6387.3554-.2095.9274-1.1943.9-1.2298-.0275-.0356-1.0771.4039-1.3751.6406Zm0-3.972c-.323.2567-.9647 1.1716-.9257 1.228.039.0563 1.0454-.4292 1.4008-.6387.3554-.2096.9274-1.1943.9-1.2299-.0275-.0355-1.0771.404-1.3751.6406Zm-2.331 3.972c.323.2567.9647 1.1716.9257 1.2279-.0391.0563-1.0455-.4292-1.4009-.6387-.3553-.2095-.92738-1.1943-.8999-1.2298.02748-.0356 1.0771.4039 1.3751.6406Zm0-3.972c.323.2567.9647 1.1716.9257 1.228-.0391.0563-1.0455-.4292-1.4009-.6387-.3553-.2096-.92738-1.1943-.8999-1.2299.02748-.0355 1.0771.404 1.3751.6406Z"
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
export class SiJarWheatIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
