import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siAlphaxivIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>alphaXiv</svg:title>
    <svg:path
      d="M19.749 12.21 24 16.46l-1.827 1.821-4.248-4.23zm-10.6-8.626a4.03 4.03 0 0 1 3.09 1.12L15.4 7.867l-1.841 1.822-3.232-3.226A1.38 1.38 0 0 0 8.55 6.5l-6.725 6.722L0 11.399l6.84-6.837a4.06 4.06 0 0 1 2.309-.979m13.026.033L24 5.44 10.032 19.403c-3.823 3.204-8.805-1.788-5.58-5.598l5.361-5.356 1.825 1.824-5.274 5.271c-1.108 1.347.633 3.054 1.96 1.921z"
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
    'data-brand-color': '#9A2036',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAlphaxivIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('alphaXiv icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#9A2036');
}
