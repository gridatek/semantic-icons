import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-laravel-horizon-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Laravel Horizon</svg:title>
    <svg:path
      d="M20.486 3.516C15.8-1.171 8.202-1.172 3.516 3.513A11.963 11.963 0 0 0 0 11.998a11.975 11.975 0 0 0 4.2 9.13h.01a12 12 0 0 0 16.274-.642c4.687-4.685 4.688-12.283.002-16.97zM16 13.998c-4 0-4-4-8-4-2.5 0-3.44 1.565-4.765 2.74H3.23a8.801 8.801 0 0 1 17.54-1.48c-1.33 1.175-2.27 2.74-4.77 2.74z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Laravel Horizon icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#405263',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLaravelHorizonIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#405263');
}
