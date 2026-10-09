import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siTriangleDashedIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M10.17 4.128c.32 -.688 1.042 -1.131 1.837 -1.128c.795 .002 1.513 .45 1.829 1.14"
    />
    <svg:path d="M14 20.027h2" />
    <svg:path d="M15.874 7.486l1 1.639" />
    <svg:path d="M18.849 12.414l1 1.638" />
    <svg:path
      d="M21.835 17.36c.28 .587 .226 1.269 -.145 1.81a2.03 2.03 0 0 1 -1.69 .86"
    />
    <svg:path
      d="M4 20.027a2.03 2.03 0 0 1 -1.702 -.864a1.8 1.8 0 0 1 -.137 -1.822"
    />
    <svg:path d="M5.136 12.414l-1 1.638" />
    <svg:path d="M8 20.027h2" />
    <svg:path d="M8.102 7.486l-1 1.639" />
  `,
  host: {
    role: 'img',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTriangleDashedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');

  readonly stroke = input<string>('currentColor');

  readonly strokeWidth = input<string | number>('2', {
    alias: 'stroke-width',
  });

  readonly strokeLinecap = input<string>('round', {
    alias: 'stroke-linecap',
  });

  readonly strokeLinejoin = input<string>('round', {
    alias: 'stroke-linejoin',
  });
}
