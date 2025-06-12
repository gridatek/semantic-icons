import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bottle-champagne-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M8 2h.01" />
    <svg:path d="M12 3h.01" />
    <svg:path d="m19 8-3-3" />
    <svg:path
      d="M9.7 21.3a2.4 2.4 0 0 1-3.4 0l-3.6-3.6a2.41 2.41 0 0 1 0-3.4l6.27-6.27A3.5 3.5 0 0 1 11.45 7h1.1a3.5 3.5 0 0 0 2.47-1.03l3.62-3.61a1.21 1.21 0 0 1 1.72 0l1.28 1.28a1.2 1.2 0 0 1 0 1.72l-3.62 3.61A3.5 3.5 0 0 0 17 11.45v1.1a3.5 3.5 0 0 1-1.03 2.48Z"
    />
    <svg:path
      d="m9.06 8 3.23 3.24a1 1 0 0 1 0 1.41L8.65 16.3a1 1 0 0 1-1.41 0L4 13.06"
    />
    <svg:path d="M21 12h.01" />
    <svg:path d="M22 16h.01" />
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
export class SiBottleChampagneIcon {
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
