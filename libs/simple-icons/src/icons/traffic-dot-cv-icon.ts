import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siTrafficDotCvIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Traffic.cv</svg:title>
    <svg:path
      d="M3.136 0A3.115 3.115 0 0 0 0 3.136v17.728A3.114 3.114 0 0 0 3.136 24h17.728A3.115 3.115 0 0 0 24 20.864V3.136A3.115 3.115 0 0 0 20.864 0Zm11.947 7.147 3.861.213a1.067 1.067 0 0 1 1.045 1.024l.214 3.861a1.067 1.067 0 0 1-1.067 1.152 1.067 1.067 0 0 1-1.11-1.024l-.106-1.322-3.67 3.882a1.067 1.067 0 0 1-1.493.107l-2.346-1.963-3.52 3.67v.042a1.557 1.557 0 0 1-1.579 1.579 1.557 1.557 0 0 1-1.557-1.579 1.557 1.557 0 0 1 1.578-1.557l4.203-4.416a1.067 1.067 0 0 1 1.493-.085l2.347 1.962 3.05-3.306-1.471-.043a1.067 1.067 0 0 1-1.003-1.152 1.067 1.067 0 0 1 1.13-1.045"
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
    'data-brand-color': '#635BFF',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTrafficDotCvIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Traffic.cv icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#635BFF');
}
