import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-u-ikit-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>UIkit</svg:title>
    <svg:path
      d="M17.697 3.292l-4.109 2.489 4.738 2.696v7.077l-6.365 3.538-6.258-3.538v-5.485L1.596 7.956V18l10.219 6 10.589-6V6.002l-4.707-2.71zm-1.904-.989L11.813 0 7.665 2.568l4.032 2.218 4.096-2.483z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "UIkit icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#2396F3',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUIkitIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#2396F3');
}
