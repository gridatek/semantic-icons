import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-rxdb-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>RxDB</svg:title>
    <svg:path
      d="M11.096 3.452h1.15v-1.15h1.151v1.15h6.411v4.932H4.192V1.15h1.15V2.3h1.151V0h1.15v1.15h1.152v2.302h1.15V1.151h1.151v2.301zM4.192 14.466h15.616V9.534H4.192v4.932zm15.616 1.15H4.192v4.932h6.41v1.15h1.151v-1.15h1.151v2.301h1.15v-2.301h1.152v2.301h1.15V24h1.151v-2.301h1.15v1.15h1.151v-7.233z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "RxDB icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#8D1F89',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRxdbIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#8D1F89');
}
