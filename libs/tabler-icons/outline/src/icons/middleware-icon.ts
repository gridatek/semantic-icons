import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siMiddlewareIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M4 20l2.25 -2.25" />
    <svg:path d="M20 20l-2.25 -2.25" />
    <svg:path d="M20 4l-2.25 2.25" />
    <svg:path d="M4 4l2.25 2.25" />
    <svg:path d="M10 19.748a8.01 8.01 0 0 1 -5.747 -5.748" />
    <svg:path d="M19.748 14a8.01 8.01 0 0 1 -5.748 5.748" />
    <svg:path d="M4.252 10a8.02 8.02 0 0 1 5.478 -5.672l.27 -.075" />
    <svg:path d="M14 4.252a8.01 8.01 0 0 1 5.748 5.749" />
    <svg:path d="M11 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
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
export class SiMiddlewareIcon {
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
