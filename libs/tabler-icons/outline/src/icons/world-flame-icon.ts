import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siWorldFlameIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M20.728 9.794c-.984 -3.904 -4.518 -6.794 -8.728 -6.794c-4.971 0 -9 4.029 -9 9c0 4.395 3.15 8.054 7.316 8.843"
    />
    <svg:path d="M3.6 9h16.8" />
    <svg:path d="M3.6 15h7.433" />
    <svg:path d="M11.5 3c-2.839 4.55 -3.333 10.107 -1.482 15.007" />
    <svg:path d="M12.5 3c1.417 2.271 2.25 4.793 2.499 7.359" />
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
export class SiWorldFlameIcon {
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
