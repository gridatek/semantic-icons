import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-erp-next-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>ERPNext</svg:title>
    <svg:path
      d="M2.88 0C1.29 0 0 1.29 0 2.88v18.24C0 22.71 1.29 24 2.88 24h18.24c1.59 0 2.88-1.29 2.88-2.88V2.88C24 1.29 22.71 0 21.12 0Zm5.04 5.76h8.254v2.146H7.92Zm0 5.033h7.85v2.146h-5.233v2.954h5.703v2.146H7.92Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "ERPNext icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#0089FF',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiERPNextIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#0089FF');
}
