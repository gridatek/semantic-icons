import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-eraser-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Eraser</svg:title>
    <svg:path
      d="M4.186 7.328c-.248 0-.482.168-.608.443l-3.476 7.51c-.283.61.057 1.39.605 1.39h10.682V7.329zm8.425 0-.002 9.344h7.205c.248 0 .482-.168.608-.443l3.476-7.51c.283-.61-.057-1.39-.605-1.39Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Eraser icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#EC2C40',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEraserIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#EC2C40');
}
