import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siLintcodeIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>LintCode</svg:title>
    <svg:path
      d="M11.11 0 5.064 10.467l4.797 6.142 1.322-2.289-3.149-4.032 4.722-8.184A902.354 902.354 0 0 0 11.11 0Zm3.029 7.391L12.817 9.68l3.148 4.032-4.721 8.184c.546.703 1.095 1.404 1.646 2.104l6.045-10.469-4.796-6.14Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "LintCode icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#13B4FF',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLintcodeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#13B4FF');
}
