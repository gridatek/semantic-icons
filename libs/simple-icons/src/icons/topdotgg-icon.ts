import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-topdotgg-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Top.gg</svg:title>
    <svg:path
      d="M0 4.3785h7.6215V12H2.329A2.3212 2.3212 0 0 1 .0077 9.6788Zm24 0H8.757v15.243h3.1144a4.5071 4.5071 0 0 0 4.507-4.5071V12h3.1145A4.5073 4.5073 0 0 0 24 7.4929z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Top.gg icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#FF3366',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTopdotggIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FF3366');
}
