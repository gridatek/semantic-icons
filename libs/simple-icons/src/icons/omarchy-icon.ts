import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siOmarchyIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Omarchy</svg:title>
    <svg:path
      d="M0 0v24h12.8v-3.2h8V3.2h-3.2v1.6h1.6v14.4H4.8V4.8h8V1.6h9.6v20.8h-8V24H24V0Zm1.6 1.6h9.6v1.6h-8v8H1.6Zm0 11.2h1.6v8h8v1.6H1.6Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#9ECE6A',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOmarchyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Omarchy icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#9ECE6A');
}
