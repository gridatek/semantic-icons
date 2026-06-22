import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siEsphomeIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>ESPHome</svg:title>
    <svg:path
      d="M11.999.311c-.384 0-.769.146-1.06.437l-9.878 9.88C.478 11.21 0 12.364 0 13.189v9c0 .825.675 1.5 1.5 1.5h5.899V8.755a.6.6 0 0 1 .6-.6h8a.6.6 0 0 1 .6.6v2.4a.6.6 0 0 1-.6.6h-5v1.2h5a.6.6 0 0 1 .6.6v2.4a.6.6 0 0 1-.6.6h-5v1.2h5a.6.6 0 0 1 .6.6v2.4a.6.6 0 0 1-.6.6h-5.6a.6.6 0 1 1 0-1.2h5v-1.2h-5a.6.6 0 0 1-.6-.6v-2.4a.6.6 0 0 1 .6-.6h5v-1.2h-5a.6.6 0 0 1-.6-.6v-2.4a.6.6 0 0 1 .6-.6h5v-1.2H8.6v14.334h13.9c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.478-1.978-1.061-2.561l-9.88-9.88A1.5 1.5 0 0 0 12 .311"
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
    'data-brand-color': '#18BCF2',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEsphomeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('ESPHome icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#18BCF2');
}
