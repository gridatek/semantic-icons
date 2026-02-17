import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siMaasIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>MAAS</svg:title>
    <svg:path
      d="M4.426 0v24h15.148V0Zm3.357 10.385c.474 0 .858.381.858.852 0 .47-.384.852-.858.852a.855.855 0 0 1-.858-.852c0-.47.384-.852.858-.852m1.044.212h7.928c.218 0 .39.173.397.384v.512a.395.395 0 0 1-.391.384H8.827c.006-.013.012-.02.019-.032a1.22 1.22 0 0 0-.02-1.248m-1.121 2.83c.474 0 .858.381.858.852 0 .47-.384.852-.858.852a.855.855 0 0 1-.858-.852c0-.47.384-.852.858-.852m1.037.198h8.012c.218 0 .39.173.39.378v.513a.395.395 0 0 1-.39.384h-8q.012-.001.013-.013c.16-.275.206-.608.122-.922a1.1 1.1 0 0 0-.147-.34M7.706 16.47c.474 0 .858.382.858.852s-.384.852-.858.852a.855.855 0 0 1-.858-.852c0-.47.384-.852.858-.852m1.037.212h8.012c.218 0 .39.172.39.384v.512a.395.395 0 0 1-.39.384H8.743l.02-.032a1.22 1.22 0 0 0-.02-1.248m-1.037 2.83c.474 0 .858.382.858.852s-.384.852-.858.852a.855.855 0 0 1-.858-.852c0-.47.384-.852.858-.852m1.037.212h8.012a.38.38 0 0 1 .39.384v.513a.395.395 0 0 1-.39.384H8.743l.02-.032a1.22 1.22 0 0 0-.02-1.249"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "MAAS icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#E95420',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMaasIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#E95420');
}
