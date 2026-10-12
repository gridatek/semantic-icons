import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siSumupIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>SumUp</svg:title>
    <svg:path
      d="M19.488 0A4.51 4.51 0 0 1 24 4.512v14.976A4.51 4.51 0 0 1 19.488 24H4.512A4.51 4.51 0 0 1 0 19.488V4.512A4.51 4.51 0 0 1 4.512 0zM7.308 17.855a5.4 5.4 0 0 0 7.649 0 5.424 5.424 0 0 0 0-7.662zm9.385-11.71a5.4 5.4 0 0 0-7.649 0 5.424 5.424 0 0 0 0 7.662z"
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
    'data-brand-color': '#1E1C1C',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSumupIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('SumUp icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#1E1C1C');
}
