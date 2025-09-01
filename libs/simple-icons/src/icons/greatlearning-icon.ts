import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-greatlearning-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Great Learning</svg:title>
    <svg:path
      d="M14.373 0c-6.617 0-12 5.383-12 12s5.383 12 12 12h.856c.958-1.175 1.911-2.354 2.867-3.531h-3.723c-4.669 0-8.469-3.8-8.469-8.469 0-4.67 3.8-8.469 8.469-8.469h4.375L21.615 0Zm3.723 20.469 3.531-4.354v-6.013h-7.502l-2.861 3.533h6.832z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Great Learning icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#0E39A9',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGreatlearningIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#0E39A9');
}
