import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-httpie-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>HTTPie</svg:title>
    <svg:path
      d="M7.28 0C4.4 0 1.992 2.279 1.933 5.155a5.263 5.263 0 0 0 5.26 5.358h4.223a.306.306 0 0 1 .122.584l-6.47 2.835a5.263 5.263 0 0 0-3.135 4.85C1.953 21.683 4.368 24 7.273 24h2.212c2.922 0 5.357-2.345 5.35-5.267a5.263 5.263 0 0 0-3.29-4.867.303.303 0 0 1-.007-.556l7.402-3.246a5.263 5.263 0 0 0 3.128-4.846C22.047 2.317 19.626.003 16.724.003z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "HTTPie icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#73DC8C',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHttpieIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#73DC8C');
}
