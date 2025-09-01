import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-alfred-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Alfred</svg:title>
    <svg:path
      d="m0 15.902c0-1.142 1.133-2.184 3-2.977v-1.827c0-4.142 4.029-7.5 9-7.5s9 3.358 9 7.5v1.827c1.867.793 3 1.835 3 2.977 0 2.485-5.373 4.5-12 4.5s-12-2.015-12-4.5z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Alfred icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#5C1F87',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAlfredIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#5C1F87');
}
