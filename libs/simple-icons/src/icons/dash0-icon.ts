import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siDash0Icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Dash0</svg:title>
    <svg:path
      d="M0 4.421c4.883 0 8.842 3.393 8.842 7.579S4.883 19.579 0 19.579zm16.421 0C20.608 4.421 24 7.814 24 12s-3.392 7.579-7.579 7.579S8.842 16.186 8.842 12s3.393-7.579 7.579-7.579"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Dash0 icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#EA3D3B',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDash0Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#EA3D3B');
}
