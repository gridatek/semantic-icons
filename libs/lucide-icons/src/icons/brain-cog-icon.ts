import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-brain-cog-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m10.852 14.772-.383.923" />
    <svg:path d="m10.852 9.228-.383-.923" />
    <svg:path d="m13.148 14.772.382.924" />
    <svg:path d="m13.531 8.305-.383.923" />
    <svg:path d="m14.772 10.852.923-.383" />
    <svg:path d="m14.772 13.148.923.383" />
    <svg:path
      d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771"
    />
    <svg:path d="M17.998 5.125a4 4 0 0 1 2.525 5.771" />
    <svg:path d="M19.505 10.294a4 4 0 0 1-1.5 7.706" />
    <svg:path
      d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516"
    />
    <svg:path d="M4.5 10.291A4 4 0 0 0 6 18" />
    <svg:path d="M6.002 5.125a3 3 0 0 0 .4 1.375" />
    <svg:path d="m9.228 10.852-.923-.383" />
    <svg:path d="m9.228 13.148-.923.383" />
    <svg:circle cx="12" cy="12" r="3" />
  `,
  host: {
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
