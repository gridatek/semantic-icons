import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-maas-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>MAAS</svg:title>
    <svg:path
      d="M12 0C5.383 0 0 5.384 0 12s5.383 12 12 12 12-5.384 12-12S18.617 0 12 0zM6.343 6.257h11.314c.284 0 .514.23.514.515v.685c0 .285-.23.515-.514.515H6.343a.515.515 0 0 1-.515-.515v-.685c0-.284.23-.515.515-.515zm0 3.257h11.314c.284 0 .514.23.514.515v.685c0 .285-.23.515-.514.515H6.343a.515.515 0 0 1-.515-.515v-.685c0-.284.23-.515.515-.515zm0 3.257h11.314c.284 0 .514.23.514.515v.685c0 .285-.23.515-.514.515H6.343a.515.515 0 0 1-.514-.515v-.685c0-.284.23-.515.514-.515zm0 3.258h11.314c.284 0 .514.23.514.513v.687c0 .284-.23.515-.514.515H6.343a.515.515 0 0 1-.514-.515v-.687c0-.284.23-.513.514-.513z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "MAAS icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#E95420',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMAASIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#E95420');
}
