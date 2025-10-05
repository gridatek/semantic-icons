import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-vueuse-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>VueUse</svg:title>
    <svg:path
      d="M.876.001v12.873C.876 19.018 5.856 24 12 24s11.124-4.982 11.124-11.126V0h-9.218v12.874c0 2.543-3.812 2.543-3.812 0V0Zm4.609 1.001h3.608v11.872C9.089 14.555 10.354 15.79 12 15.79s2.911-1.236 2.907-2.916V1.002h3.608v11.872a6.515 6.515 0 0 1-13.03 0z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "VueUse icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#41B883',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVueuseIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#41B883');
}
