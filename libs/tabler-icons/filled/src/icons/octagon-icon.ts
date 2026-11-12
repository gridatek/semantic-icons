import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siOctagonIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M14.899 2c.796 0 1.558 .316 2.121 .879l4.101 4.1c.563 .563 .879 1.325 .879 2.122v5.798c0 .796 -.316 1.558 -.879 2.121l-4.101 4.101c-.563 .563 -1.325 .879 -2.121 .879h-5.798c-.796 0 -1.558 -.316 -2.122 -.879l-4.1 -4.101c-.563 -.563 -.879 -1.325 -.879 -2.121v-5.798c0 -.796 .316 -1.558 .879 -2.122l4.1 -4.1c.563 -.563 1.325 -.879 2.122 -.879h5.798z"
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
export class SiOctagonIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
