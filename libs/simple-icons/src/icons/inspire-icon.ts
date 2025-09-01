import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-inspire-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>INSPIRE</svg:title>
    <svg:path
      d="M0 0v24h24V0H0zm3.873 3.6875c1.0359-.0008 1.8758.8391 1.875 1.875-.0003 1.035-.8399 1.8738-1.875 1.873C2.8387 7.4352 2.0003 6.5968 2 5.5625c-.0008-1.035.838-1.8747 1.873-1.875zm4.4903.5078h3.5312l6.7344 10.8125h.045V4.1953H22v16.1172h-3.5469l-6.7168-10.791h-.0468v10.791H8.3633V4.1953zm-6.123 4.7871s.013.0041 3.3886 0v11.2754H2.2402V8.9824z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "INSPIRE icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#00E5FF',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiINSPIREIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00E5FF');
}
