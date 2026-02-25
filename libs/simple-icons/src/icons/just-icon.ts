import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siJustIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Just</svg:title>
    <svg:path
      d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0m0 2.35a3.25 3.35 0 0 1 3.25 3.35A3.25 3.35 0 0 1 12 9.05 3.25 3.35 0 0 1 8.75 5.7 3.25 3.35 0 0 1 12 2.35m0 12.6a3.25 3.35 0 0 1 3.25 3.35A3.25 3.35 0 0 1 12 21.65a3.25 3.35 0 0 1-3.25-3.35A3.25 3.35 0 0 1 12 14.95"
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
    'data-brand-color': '#000000',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiJustIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Just icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
