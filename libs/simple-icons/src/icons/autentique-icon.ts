import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siAutentiqueIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Autentique</svg:title>
    <svg:path
      d="m18.54 1.225-.27 1.66a10.57 10.57 0 0 0-6.114-2.32L0 11.99h12.156V6.062c3.199 0 5.74 2.434 5.74 5.917 0 3.687-2.614 5.98-5.73 5.98-2.594 0-4.648-1.557-5.429-3.898L0 11.984c0 6.43 4.591 11.45 11.543 11.45 1.666 0 4.259-.383 6.706-2.325l.29 1.64H24V1.225Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Autentique icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#3379F2',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAutentiqueIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#3379F2');
}
