import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bread-slice-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      d="M11.9925 3.01102c-1.9214.01439-3.85188.37019-6.25505 1.0241-.01805.00491-.03595.01032-.05369.01624-.91244.30416-1.60323.7905-2.06 1.42998C3.16866 6.1185 3 6.83191 3 7.50006c0 .63697.15395 1.45811.5895 2.15498.31425.50276.78203.94286 1.4105 1.17356V19c0 1.1046.89543 2 2 2h10c1.1046 0 2-.8954 2-2v-8.1714c.6285-.2307 1.0962-.6708 1.4105-1.17356C20.846 8.95817 21 8.13703 21 7.50006c0-.66815-.1687-1.38156-.6238-2.01872-.4567-.63948-1.1475-1.12582-2.06-1.42998-.0177-.00592-.0356-.01133-.0536-.01624-2.4032-.65391-4.3337-1.00971-6.2551-1.0241h-.015Z"
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
export class SiBreadSliceIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
