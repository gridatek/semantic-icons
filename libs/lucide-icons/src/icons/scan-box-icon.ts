import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siScanBoxIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 12v5.5" />
    <svg:path d="M17 3h2a2 2 0 012 2v2" />
    <svg:path d="M21 17v2a2 2 0 01-2 2h-2" />
    <svg:path d="M3 7V5a2 2 0 012-2h2" />
    <svg:path d="M7 21H5a2 2 0 01-2-2v-2" />
    <svg:path d="M7.264 9.252 12 12l4.737-2.748" />
    <svg:path
      d="M7.995 8.514A2 2 0 007 10.244v3.516a2 2 0 00.996 1.73l3 1.74a2 2 0 002.008 0l3-1.74A2 2 0 0017 13.76v-3.517a2 2 0 00-.995-1.73l-3-1.742a2 2 0 00-1.892-.064z"
    />
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
export class SiScanBoxIcon {
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
