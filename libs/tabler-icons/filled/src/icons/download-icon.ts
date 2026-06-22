import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siDownloadIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M20 16a1 1 0 0 1 1 1v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2a1 1 0 0 1 2 0v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-2a1 1 0 0 1 1 -1m-8 -13a1 1 0 0 1 1 1v9.585l3.293 -3.292a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1 -.09 .08l.09 -.08a1 1 0 0 1 -.674 .292l-.033 .001h-.032l-.054 -.004l.086 .004a1 1 0 0 1 -.617 -.213a1 1 0 0 1 -.09 -.08l-5 -5a1 1 0 0 1 1.414 -1.414l3.293 3.292v-9.585a1 1 0 0 1 1 -1"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-hidden]': 'ariaHidden()',
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
export class SiDownloadIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
