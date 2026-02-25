import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siClickhouseIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>ClickHouse</svg:title>
    <svg:path
      d="M21.333 10H24v4h-2.667ZM16 1.335h2.667v21.33H16Zm-5.333 0h2.666v21.33h-2.666ZM0 22.665V1.335h2.667v21.33zm5.333-21.33H8v21.33H5.333Z"
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
    'data-brand-color': '#FFCC01',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiClickhouseIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('ClickHouse icon');
  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FFCC01');
}
