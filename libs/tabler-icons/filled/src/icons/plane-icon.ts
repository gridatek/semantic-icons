import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPlaneIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12.868 2.504l3.712 6.496h3.42a3 3 0 0 1 0 6h-3.42l-3.712 6.496a1 1 0 0 1 -.868 .504h-3a1 1 0 0 1 -.962 -1.275l1.636 -5.725h-2.26l-1.707 1.707a1 1 0 0 1 -.707 .293h-3a1 1 0 0 1 -.894 -1.447l1.776 -3.553l-1.776 -3.553a1 1 0 0 1 .894 -1.447h3a1 1 0 0 1 .707 .293l1.707 1.707h2.26l-1.636 -5.725a1 1 0 0 1 .962 -1.275h3a1 1 0 0 1 .868 .504"
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
export class SiPlaneIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
