import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-blockchain-dot-com-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Blockchain.com</svg:title>
    <svg:path
      d="M19.8285 6.6117l-5.52-5.535a3.1352 3.1352 0 00-4.5 0l-5.535 5.535 7.755 3.87zm2.118 2.235l1.095 1.095a3.12 3.12 0 010 4.5L14.22 23.3502a2.6846 2.6846 0 01-.72.525V13.0767zm-19.893 0l-1.095 1.095a3.1198 3.1198 0 000 4.5L9.78 23.3502c.2091.214.4525.3914.72.525V13.0767z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Blockchain.com icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#121D33',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBlockchainDotComIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#121D33');
}
