import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bowl-rice-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17 9.99999h.01m-5.01 0h.01m-5.01 0h.01m6.99-2h.01m-4.01 0h.01M6.5 13C5.11929 13 4 11.5609 4 9.78571c0-1.51294.45014-3.74021 2.96705-3.45229 0-2.59313 4.39355-3.02689 5.16885-1.10126.5-.64286 1.5465-1.20611 2.5405-1.09637 1.2588.13899 2.0504 1.03413 2.2104 2.19763 1.7674 0 3.3338 1.31661 3.1132 3.45229C20 11.5609 18.8807 13 17.5 13m-8.52339 5.6162V20h6.04679v-1.3838C17.68 17.6825 19.633 15.5551 20 13H4c.36697 2.5551 2.31996 4.6825 4.97661 5.6162Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBowlRiceIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
