import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siFormspreeIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Formspree</svg:title>
    <svg:path
      d="M1.333 2a2 2 0 0 1 2-2h17.334a2 2 0 0 1 2 2v2.857a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2zm0 8.571a2 2 0 0 1 2-2h17.334a2 2 0 0 1 2 2v2.858a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2zm2 6.572a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.857a2 2 0 0 0-2-2z"
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
    'data-brand-color': '#E5122E',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFormspreeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Formspree icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#E5122E');
}
