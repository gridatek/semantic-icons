import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siZxIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>zx</svg:title>
    <svg:path
      d="M22.036 18.327v5.673h-20.072v-5.673l6.152-6.56L2.4 5.673V0h19.156v5.673l-5.716 6.094 6.153 6.56h0.043Zm-10.058-10.677l1.855-1.977h-3.709l1.854 1.977Zm0 8.235l-2.291 2.442h4.582l-2.291-2.442Z"
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
    'data-brand-color': '#F11A7B',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiZxIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('zx icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#F11A7B');
}
