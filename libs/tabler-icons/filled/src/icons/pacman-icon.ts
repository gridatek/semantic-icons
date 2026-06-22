import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPacmanIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M13.557 2.015a10 10 0 0 1 7.257 3.744a1 1 0 0 1 -.074 1.331l-4.912 4.91l4.912 4.91a1 1 0 0 1 .074 1.332a10 10 0 1 1 -15.112 -13.078l.235 -.242l.07 -.063a9.98 9.98 0 0 1 7.55 -2.844m-1.057 3.485c-1.02 0 -1.86 .762 -1.982 1.748l-.013 .15a1 1 0 0 0 -.005 .102a2 2 0 1 0 2 -2"
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
export class SiPacmanIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
