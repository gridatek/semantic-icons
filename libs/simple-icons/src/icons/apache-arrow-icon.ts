import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siApacheArrowIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Apache Arrow</svg:title>
    <svg:path
      d="m0 2 10 10L0 22v-4l6-6-6-6zm7 0 10 10L7 22v-4l6-6-6-6zm7 0 10 10-10 10v-4l6-6-6-6z"
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
export class SiApacheArrowIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Apache Arrow icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
