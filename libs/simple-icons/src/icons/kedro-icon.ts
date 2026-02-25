import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siKedroIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Kedro</svg:title>
    <svg:path d="m12 0 12 12-12 12L0 12 12 0z" />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#FFC900',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKedroIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Kedro icon');
  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FFC900');
}
