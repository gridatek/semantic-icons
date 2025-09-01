import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-clevercloud-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Clever Cloud</svg:title>
    <svg:path
      d="M4.823 11.139 11.253 0 1.608 5.57zM1.235 6.646v10.708L4.325 12zM12 23.57l6.43-11.14H5.57zM12 .43 5.57 11.57h12.86zm10.764 16.924V6.646L19.674 12zm.001.862-.374.215-3.215-5.57L12.746 24zm0-12.431L12.745 0l6.431 11.139 3.215-5.57zM1.235 18.216 11.254 24l-6.43-11.138-3.216 5.569z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Clever Cloud icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#171C36',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiClevercloudIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#171C36');
}
