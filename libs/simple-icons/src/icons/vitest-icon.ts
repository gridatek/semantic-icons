import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siVitestIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Vitest</svg:title>
    <svg:path
      d="M11.545 23.3a.613.613 0 0 1-.895.197L.252 15.936A.61.61 0 0 1 0 15.439V6.325c0-.502.569-.792.975-.497l6.358 4.624c.594.433 1.432.25 1.793-.39L14.393.7a.62.62 0 0 1 .535-.314h8.455a.613.613 0 0 1 .537.916z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Vitest icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#00FF74',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVitestIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00FF74');
}
