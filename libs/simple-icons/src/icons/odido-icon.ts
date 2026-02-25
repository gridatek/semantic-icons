import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siOdidoIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Odido</svg:title>
    <svg:path
      d="M20.923 15.077a3.077 3.077 0 1 0 0-6.154 3.077 3.077 0 0 0 0 6.154m-17.846 0a3.077 3.077 0 1 0 0-6.154 3.077 3.077 0 0 0 0 6.154m3.692 0a3.077 3.077 0 0 0 0-6.154zm10.462 0a3.077 3.077 0 0 1 0-6.154zm-3.693-6.154h-3.077v6.154h3.077z"
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
    'data-brand-color': '#2C72FF',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOdidoIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Odido icon');
  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#2C72FF');
}
