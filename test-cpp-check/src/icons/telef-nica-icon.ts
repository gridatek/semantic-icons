import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-telef-nica-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Telefónica</svg:title>
    <svg:path
      d="M7.162 3.581a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0m8.419 0a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0m8.419 0a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0M15.581 12a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0m0 8.419a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Telefónica icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#0066FF',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTelefNicaIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#0066FF');
}
