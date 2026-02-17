import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siIndiewebIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>IndieWeb</svg:title>
    <svg:path
      d="M20.387 8.258A3.643 3.643 0 0 1 24 11.54h-3.613a.35.35 0 0 0-.348.348c.009.182.13.32.312.346l.036.002H24c-.178 1.872-1.75 3.258-3.613 3.282a3.63 3.63 0 1 1 0-7.26m-9.938.247 3.359 7.237 3.39-7.237zm-2.941 0 3.359 7.237 1.099-2.283-2.338-4.954zM0 11.083h6.78v4.125H0zm0-2.578h6.78v1.897H0z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "IndieWeb icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#FF0000',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIndiewebIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FF0000');
}
