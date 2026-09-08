import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siGermOffIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m11 2 .925 1.848" />
    <svg:path d="M13 15h.01" />
    <svg:path d="M13.424 7.768a2 2 0 112.808 2.808" />
    <svg:path d="m16 21-1-2.472" />
    <svg:path
      d="M16.988 16.988A12 12 0 019 20a5 5 0 01-2.759-9.171 8.8 8.8 0 002.307-2.28"
    />
    <svg:path d="m19 2-1 1.804" />
    <svg:path d="m2 19 2.746-1.373" />
    <svg:path d="m2 2 20 20" />
    <svg:path
      d="m22 16-2.474-2.13a12 12 0 001.376-3.786 6 6 0 00-10.313-5.151"
    />
    <svg:path d="m22 5-1.804 1" />
    <svg:path d="m3 10 2 2" />
    <svg:path d="M9 16h.01" />
    <svg:path d="M9 20v2" />
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
export class SiGermOffIcon {
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
