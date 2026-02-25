import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siJuliaIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Julia</svg:title>
    <svg:path
      d="M11.138 17.569a5.569 5.569 0 1 1-11.138 0 5.569 5.569 0 1 1 11.138 0zm6.431-11.138a5.569 5.569 0 1 1-11.138 0 5.569 5.569 0 1 1 11.138 0zM24 17.569a5.569 5.569 0 1 1-11.138 0 5.569 5.569 0 1 1 11.138 0z"
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
    'data-brand-color': '#9558B2',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiJuliaIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Julia icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#9558B2');
}
