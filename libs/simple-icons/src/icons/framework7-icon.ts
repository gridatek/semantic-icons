import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siFramework7Icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Framework7</svg:title>
    <svg:path
      d="M0 12a11.95 11.95 0 012.713-7.6h18.574L8.037 23.33C3.358 21.694 0 17.24 0 12zm22.271-6.208A11.944 11.944 0 0124 12c0 6.627-5.373 12-12 12-.794 0-1.57-.077-2.32-.224zM4.295 2.8A11.952 11.952 0 0112 0c2.933 0 5.62 1.052 7.705 2.8z"
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
    'data-brand-color': '#EE350F',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFramework7Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Framework7 icon');
  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#EE350F');
}
