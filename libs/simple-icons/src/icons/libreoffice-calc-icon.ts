import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-libreoffice-calc-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>LibreOffice Calc</svg:title>
    <svg:path
      d="M9 13H7v-1h2v1zm6-3h-2v1h2v-1zm-6 0H7v1h2v-1zm3 0h-2v1h2v-1zm3-10 7 7V0h-7zM9 14H7v1h2v-1zm5 3h1v-3h-1v3zm2 0h1v-1h-1v1zm-4 0h1v-2h-1v2zm1-17 9 9v12c0 1.662-1.338 3-3 3H5c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3h8zm5 13h-7v5h7v-5zm-2-4H6v7h4.5v-1H10v-1h.5v-1H10v-1h2v.5h1V12h2v.5h1V9z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "LibreOffice Calc icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#007C3C',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLibreofficeCalcIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#007C3C');
}
