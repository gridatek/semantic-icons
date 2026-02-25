import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siSPDXIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>SPDX</svg:title>
    <svg:path
      d="M0 0v24H8.222l2.089-2.373 2.09-2.374V13.2H18.978l2.51-2.488L24 8.223V0H12zm5.2 5.2h13.791L12.2 12c-3.735 3.74-6.838 6.8-6.896 6.8-.057 0-.104-3.06-.104-6.8zm8.4 8.8v10H24V14h-5.2z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "SPDX icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#4398CC',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSPDXIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#4398CC');
}
