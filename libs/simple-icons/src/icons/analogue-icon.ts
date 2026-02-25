import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siAnalogueIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Analogue</svg:title>
    <svg:path
      d="M5.468 12.804a5.145 5.145 0 10-.644 10.27 5.145 5.145 0 00.644-10.27zm17.841 2.562L16.45 3.484a5.146 5.146 0 00-8.912 5.15l6.86 11.878a5.148 5.148 0 007.031 1.885 5.146 5.146 0 001.881-7.031z"
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
    'data-brand-color': '#1A1A1A',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAnalogueIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Analogue icon');
  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#1A1A1A');
}
