import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siCameraFlameIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M10.126 20h-5.126c-1.105 0 -2 -.895 -2 -2v-9c0 -1.105 .895 -2 2 -2h1c1.105 0 2 -.895 2 -2c0 -.552 .448 -1 1 -1h6c.552 0 1 .448 1 1c0 1.105 .895 2 2 2h1c1.105 0 2 .895 2 2v.933"
    />
    <svg:path
      d="M14.419 11.226c-.546 -.743 -1.426 -1.226 -2.419 -1.226c-1.657 0 -3 1.343 -3 3c0 1.172 .672 2.187 1.652 2.681"
    />
    <svg:path
      d="M15.5 16q 2.5 1.5 2.5 -1v-2c0 0 4 1.06 4 5c0 1.664 -.649 3.338 -2 4v-.25c0 -.957 -1.053 -1.75 -2 -1.75c-.947 0 -2 .793 -2 1.75v.25c-1.351 -.662 -2 -2 -2 -3.5c0 -1.5 1.5 -2.5 1.5 -2.5"
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
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCameraFlameIcon {
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
