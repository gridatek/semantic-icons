import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siLabexIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>LabEx</svg:title>
    <svg:path
      d="M17.2 0a1.2 1.2 0 0 1 1.2 1.2v4a1.2 1.2 0 0 1-1.2 1.2h-.402v1.212l6.976 9.687a1.2 1.2 0 0 1 .22.576L24 18v4.8a1.2 1.2 0 0 1-1.2 1.2H1.2A1.2 1.2 0 0 1 0 22.8V18c0-.252.08-.497.226-.701l6.975-9.687V6.4H6.8a1.2 1.2 0 0 1-1.194-1.084L5.6 5.2v-4A1.2 1.2 0 0 1 6.8 0zM16 2.4H8V4h.4a1.2 1.2 0 0 1 1.195 1.084l.006.116v2.703c0 .315-.1.622-.283.877L2.4 18.386V21.6h19.2v-3.213L14.681 8.78a1.5 1.5 0 0 1-.277-.743l-.006-.134V5.2a1.2 1.2 0 0 1 1.2-1.2H16zm-.48 14.4a1.2 1.2 0 0 1 0 2.4h-2.88a1.2 1.2 0 0 1 0-2.4zm-6.137-4.449 2.135 2.135a1.2 1.2 0 0 1 0 1.697l-2.135 2.135a1.2 1.2 0 1 1-1.697-1.697l1.286-1.286-1.286-1.286a1.2 1.2 0 0 1-.078-1.612l.078-.086a1.2 1.2 0 0 1 1.697 0"
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
    'data-brand-color': '#2E7EEE',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLabexIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('LabEx icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#2E7EEE');
}
