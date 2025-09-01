import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-crehana-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Crehana</svg:title>
    <svg:path
      d="M12,0C5.371,0,0,5.371,0,12c0,6.626,5.371,12,12,12s12-5.374,12-12C24,5.371,18.626,0,12,0z M17.94,9.843v7.915h-3.957 v-3.892h-3.895v3.83H6.13v-3.957h3.833V9.843H6.06V5.948h3.957v3.895h3.965V5.948h3.957V9.843z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Crehana icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#4B22F4',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCrehanaIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#4B22F4');
}
