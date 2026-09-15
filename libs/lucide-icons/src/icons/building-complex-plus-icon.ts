import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siBuildingComplexPlusIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10 12h4" />
    <svg:path d="M10 21v-3a2 2 0 013.05-1.702" />
    <svg:path d="M10 8h4" />
    <svg:path d="M16 19h6" />
    <svg:path d="M18 7h2a2 2 0 012 2v4.355" />
    <svg:path d="M19 16v6" />
    <svg:path d="M6 10H4a2 2 0 00-2 2v7a2 2 0 002 2h8.535" />
    <svg:path d="M6 21V5a2 2 0 012-2h8a2 2 0 012 2v7.126" />
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
export class SiBuildingComplexPlusIcon {
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
