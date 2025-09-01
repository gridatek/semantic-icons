import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-thefinals-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>THE FINALS</svg:title>
    <svg:path
      d="M18.523 19.319H24L14.965 6.295c-.626-.904-1.51-1.614-2.847-1.614-1.38 0-2.264.775-2.889 1.614L0 19.319h5.261l3.372-4.759 3.256 4.759h5.478l-5.934-8.712.599-.846 6.491 9.558Zm0 0"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "THE FINALS icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#D31F3C',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTHEFINALSIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#D31F3C');
}
