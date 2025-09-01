import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-google-display-and-video360-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Google Display &amp; Video 360</svg:title>
    <svg:path
      d="M4.421.01a2.947 2.947 0 0 0-2.828 1.52 2.967 2.967 0 0 0 1.094 4.076l10.6 6.064 4.79-2.672a3.546 3.546 0 0 1 1.811-.443L5.701.424A2.947 2.947 0 0 0 4.42.01ZM1.164 4.768v14.484a3.474 3.474 0 0 1 2.972-1.687 3.47 3.47 0 0 1 2.961 1.672l.004-10.53L2.44 6.04a3.433 3.433 0 0 1-1.275-1.271Zm18.42 4.289a3.08 3.08 0 0 0-1.264.379L7.6 15.414c.003 1.873-.011 3.745.003 5.617 0 .4-.072.988-.396 1.606l12.548-7.227 1.487-.83a2.978 2.978 0 0 0 1.463-3.511 3.08 3.08 0 0 0-3.121-2.012ZM4.136 18.065A2.967 2.967 0 1 0 4.134 24a2.967 2.967 0 0 0 .002-5.935z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Google Display &amp; Video 360 icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#34A853',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGoogleDisplayAndVideo360Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#34A853');
}
