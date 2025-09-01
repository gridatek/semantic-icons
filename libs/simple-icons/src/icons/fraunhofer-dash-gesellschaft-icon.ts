import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-fraunhofer-dash-gesellschaft-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Fraunhofer-Gesellschaft</svg:title>
    <svg:path
      d="M.06 23.99c5.681-2.926 14-7.653 23.88-14.567v-2.32C15.247 12.792 6.406 17.359.06 20.38zm0-6.93c6.325-2.575 15.166-6.558 23.88-11.74V4.174C15.751 8.238 7.24 10.781.06 12.366zM23.94 24V12.332A201.394 201.393 0 0 1 8.596 24zM5.542 24a166.927 166.926 0 0 0 14.7-9.765 323.136 324.76 0 0 0 3.698-2.81V9.98C16.257 15.74 8.413 20.542 2.287 24zM.06 10.668C7.044 9.44 15.589 7.231 23.94 3.262v-1.3C15.526 5.737 7.102 7.338.06 7.91zM.06 0v6.686c.522-.033 1.054-.07 1.596-.111C7.464 6.126 15.387 5.1 23.94 1.402V0z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Fraunhofer-Gesellschaft icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#179C7D',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFraunhoferDashGesellschaftIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#179C7D');
}
