import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siServBayIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>ServBay</svg:title>
    <svg:path
      d="M14.201.028a.505.505 0 0 1 .643.313c.04.11.043.23.006.341l-2.258 6.356a.512.512 0 0 1-.319.302L1 11.168l2.665-7.33a.513.513 0 0 1 .319-.302L14.2.028h.001ZM1 11.757l2.776 4.05a.55.55 0 0 0 .622.227l5.12-1.892a.483.483 0 0 0 .29-.653l-.03-.063L7.412 9.62 1 11.756Zm8.799 12.215a.505.505 0 0 1-.643-.312.517.517 0 0 1-.006-.342l2.235-6.365a.513.513 0 0 1 .319-.3L23 12.832l-2.665 7.33a.51.51 0 0 1-.318.3l-10.218 3.51v-.001ZM20.437 8.079a.55.55 0 0 0-.622-.226l-5.12 1.893a.483.483 0 0 0-.29.65l.03.064 2.336 3.85 6.215-2.12-2.55-4.11h.001Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "ServBay icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#00103C',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiServBayIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00103C');
}
