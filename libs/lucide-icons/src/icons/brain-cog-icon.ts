import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siBrainCogIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m10.852 14.772-.383.923" />
    <svg:path d="m10.852 9.228-.383-.923" />
    <svg:path d="m13.148 14.772.382.924" />
    <svg:path d="m13.53 8.305-.382.923" />
    <svg:path d="m14.772 10.852.923-.383" />
    <svg:path d="m14.772 13.148.923.383" />
    <svg:path d="M17.997 5.125a4 4 0 012.526 5.77" />
    <svg:path d="M18 18a4 4 0 002-7.464" />
    <svg:path
      d="M4.033 17.483A4 4 0 0011.46 20c.184-.31.896-.31 1.076 0a4 4 0 007.43-2.517"
    />
    <svg:path d="M6 18a4 4 0 01-2-7.464" />
    <svg:path d="M6.002 5.125a4 4 0 00-2.525 5.77" />
    <svg:path
      d="M6.293 6.294a3 3 0 01-.287-1.098l-.004-.07a3 3 0 015.968-.543c.05.02.057.01.059 0a3 3 0 015.968.542l-.004.071a3 3 0 01-.287 1.098"
    />
    <svg:path d="m9.228 10.852-.923-.383" />
    <svg:path d="m9.228 13.148-.923.383" />
    <svg:circle cx="12" cy="12" r="3" />
  `,
  host: {
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
    'data-slot': 'icon',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrainCogIcon {
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
