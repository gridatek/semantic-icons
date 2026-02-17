import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siReflexIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Reflex</svg:title>
    <svg:path d="M17 15v9h5v-9zM2 0v24h5v-9h10v-5H7V5h10v5h5V0z" />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Reflex icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#6E56CF',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiReflexIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#6E56CF');
}
