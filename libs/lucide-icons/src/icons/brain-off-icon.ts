import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siBrainOffIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 18v-6" />
    <svg:path d="M12 5v1.344" />
    <svg:path d="M17.707 6.293A3 3 0 1012 5a3 3 0 00-4.124-2.781" />
    <svg:path d="M17.997 5.125a4 4 0 012.526 5.77" />
    <svg:path d="M19.644 19.644A4 4 0 0112 18a4 4 0 11-7.967-.517" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M20 10.536a4 4 0 011.533 5.34" />
    <svg:path d="M3.477 10.895a4 4 0 011.876-5.542" />
    <svg:path d="M6 18a4 4 0 01-2-7.464" />
    <svg:path d="M9 13a4.17 4.17 0 002.166-1.5 4 4 0 00.138-.196" />
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
export class SiBrainOffIcon {
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
