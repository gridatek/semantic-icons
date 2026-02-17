import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siGlanceIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Glance</svg:title>
    <svg:path
      d="M2.77 0A2.763 2.763 0 0 0 0 2.77v18.46A2.763 2.763 0 0 0 2.77 24h18.46A2.763 2.763 0 0 0 24 21.23V2.77A2.763 2.763 0 0 0 21.23 0Zm.922 1.846h5.539c1.023 0 1.846.824 1.846 1.846v16.616a1.842 1.842 0 0 1-1.846 1.846H3.692a1.842 1.842 0 0 1-1.846-1.846V3.692c0-1.022.824-1.846 1.846-1.846zm11.077 0h5.539c1.022 0 1.846.824 1.846 1.846v5.539a1.842 1.842 0 0 1-1.846 1.846h-5.539a1.842 1.842 0 0 1-1.846-1.846V3.692c0-1.022.823-1.846 1.846-1.846zm1.226 1.846-.946.961h2.964c.148 0 .29-.005.423-.012a.78.78 0 0 0 .312-.089L14.77 8.528l.725.703 3.923-3.941a1.031 1.031 0 0 0-.1.322 3.265 3.265 0 0 0-.023.38v3.071l1.014-1.004V3.692Zm-1.226 9.231h5.539c1.022 0 1.846.823 1.846 1.846v5.539a1.842 1.842 0 0 1-1.846 1.846h-5.539a1.842 1.842 0 0 1-1.846-1.846v-5.539c0-1.023.823-1.846 1.846-1.846z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Glance icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#D9C38C',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGlanceIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#D9C38C');
}
