import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPandocIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Pandoc</svg:title>
    <svg:path
      d="M4.259 0a.95.95 0 0 0-.925.837.74.74 0 0 0 .75.837h1.953L3.778 23.163a.74.74 0 0 0 .75.837.95.95 0 0 0 .924-.837l2.26-21.489h2.51Q9.095 12.419 7.964 23.163a.74.74 0 0 0 .75.837.95.95 0 0 0 .925-.837l.997-9.489h8.372a.95.95 0 0 0 .925-.837l.733-6.977a.76.76 0 0 0-.182-.591L15.988.245A.75.75 0 0 0 15.422 0Zm7.638 1.674H14.9l.06.068-.403 3.84a.494.494 0 0 0 .5.558h3.84l.06.067-.61 5.793h-7.534z"
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
    'data-brand-color': '#4093DA',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPandocIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Pandoc icon');
  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#4093DA');
}
