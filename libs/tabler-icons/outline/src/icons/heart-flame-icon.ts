import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siHeartFlameIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M10.016 18.035l-5.516 -5.463c-1.349 -1.312 -1.846 -3.271 -1.288 -5.068c.559 -1.797 2.079 -3.128 3.935 -3.444c1.855 -.316 3.731 .436 4.853 1.946c1.127 -1.499 2.999 -2.241 4.847 -1.922c1.848 .319 3.363 1.646 3.922 3.436c.244 .781 .288 1.593 .149 2.37"
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
export class SiHeartFlameIcon {
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
