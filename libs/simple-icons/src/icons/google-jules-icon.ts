import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siGoogleJulesIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Google Jules</svg:title>
    <svg:path
      d="M4.2 24q-1.26 0-2.13-.87T1.2 21v-.6q0-.51.345-.855T2.4 19.2t.855.345.345.855v.6q0 .24.18.42t.42.18.42-.18.18-.42V7.2q0-3 2.1-5.1T12 0t5.1 2.1 2.1 5.1V21q0 .24.18.42t.42.18.42-.18.18-.42v-.6q0-.51.345-.855t.855-.345.855.345.345.855v.6q0 1.26-.87 2.13T19.8 24t-2.13-.87T16.8 21v-5.4h-1.62v4.8q0 .51-.345.855t-.855.345-.855-.345-.345-.855v-4.8h-1.59v4.8q0 .51-.345.855t-.855.345-.855-.345-.345-.855v-4.8H7.2V21q0 1.26-.87 2.13T4.2 24m4.2-11.4q.54 0 .87-.45t.33-1.05-.33-1.05-.87-.45-.87.45-.33 1.05.33 1.05.87.45m7.2 0q.54 0 .87-.45t.33-1.05-.33-1.05-.87-.45-.87.45-.33 1.05.33 1.05.87.45"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Google Jules icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#715CD7',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGoogleJulesIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#715CD7');
}
