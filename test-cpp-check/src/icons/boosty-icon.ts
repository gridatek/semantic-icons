import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-boosty-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Boosty</svg:title>
    <svg:path
      d="M2.661 14.337 6.801 0h6.362L11.88 4.444l-.038.077-3.378 11.733h3.15c-1.321 3.289-2.35 5.867-3.086 7.733-5.816-.063-7.442-4.228-6.02-9.155M8.554 24l7.67-11.035h-3.25l2.83-7.073c4.852.508 7.137 4.33 5.791 8.952C20.16 19.81 14.344 24 8.68 24h-.127z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Boosty icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#F15F2C',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBoostyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#F15F2C');
}
