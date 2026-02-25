import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPeakDesignIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Peak Design</svg:title>
    <svg:path
      d="m24 10.523-9.446 6.493-4.74-3.271 4.723-3.255 3.738 2.57 3.705-2.537zm-6.743 3.255-2.72-1.886-2.704 1.853 2.737 1.869zm-7.794-.284-3.738-2.57-3.706 2.554h-2.019l9.43-6.493 4.756 3.255zm-2.737-3.254 2.737 1.869 2.704-1.869-2.737-1.87z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Peak Design icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#1C1B1C',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPeakDesignIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#1C1B1C');
}
