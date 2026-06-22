import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siListDetailsIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M22 5a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0 -2h8a1 1 0 0 1 1 1m-3 4a1 1 0 0 1 -1 1h-5a1 1 0 0 1 0 -2h5a1 1 0 0 1 1 1m3 6a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0 -2h8a1 1 0 0 1 1 1m-3 4a1 1 0 0 1 -1 1h-5a1 1 0 0 1 0 -2h5a1 1 0 0 1 1 1m-11 -16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2l.001 -4.051l.004 -.051a1.996 1.996 0 0 1 1.995 -1.898zm0 10a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2l.001 -4.051l.004 -.051a1.996 1.996 0 0 1 1.995 -1.898z"
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
export class SiListDetailsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
