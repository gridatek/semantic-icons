import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siHtmxIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>htmx</svg:title>
    <svg:path
      d="M0 13.01v-2l7.09-2.98.58 1.94-5.1 2.05 5.16 2.05-.63 1.9Zm16.37 1.03 5.18-2-5.16-2.09.65-1.88L24 10.95v2.12L17 16zm-2.85-9.98H16l-5.47 15.88H8.05Z"
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
    'data-brand-color': '#3366CC',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHtmxIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('htmx icon');
  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#3366CC');
}
