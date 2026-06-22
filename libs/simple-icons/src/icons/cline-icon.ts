import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siClineIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Cline</svg:title>
    <svg:path
      d="m23.365 13.556-1.442-2.895V8.994c0-2.764-2.218-5.002-4.954-5.002h-2.464c.178-.367.276-.779.276-1.213A2.77 2.77 0 0 0 12.018 0a2.77 2.77 0 0 0-2.763 2.779c0 .434.098.846.276 1.213H7.067c-2.736 0-4.954 2.238-4.954 5.002v1.667L.64 13.549c-.149.29-.149.636 0 .927l1.472 2.855v1.667C2.113 21.762 4.33 24 7.067 24h9.902c2.736 0 4.954-2.238 4.954-5.002V17.33l1.44-2.865c.143-.286.143-.622.002-.91m-12.854 2.36a2.27 2.27 0 0 1-2.261 2.273 2.27 2.27 0 0 1-2.261-2.273v-4.042A2.27 2.27 0 0 1 8.249 9.6a2.267 2.267 0 0 1 2.262 2.274zm7.285 0a2.27 2.27 0 0 1-2.26 2.273 2.27 2.27 0 0 1-2.262-2.273v-4.042A2.267 2.267 0 0 1 15.535 9.6a2.267 2.267 0 0 1 2.261 2.274z"
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
    'data-brand-color': '#18181B',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiClineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Cline icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#18181B');
}
