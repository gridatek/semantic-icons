import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPurescriptIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>PureScript</svg:title>
    <svg:path
      d="M19.166 4.6l-1.24 1.24 3.97 3.97-3.97 3.97 1.24 1.24 4.58-4.6a.87.87 0 0 0 0-1.23zM6.955 6.74l1.87 1.75h8.23l-1.87-1.75zm-2.1 2.24l-4.6 4.6a.87.87 0 0 0 0 1.23l4.6 4.59 1.23-1.24-3.97-3.97 3.97-3.97-1.24-1.24zm3.97 2.14l-1.87 1.76h8.23l1.87-1.76zm-1.87 4.39l1.87 1.75h8.23l-1.87-1.75z"
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
    'data-brand-color': '#14161A',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPurescriptIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('PureScript icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#14161A');
}
