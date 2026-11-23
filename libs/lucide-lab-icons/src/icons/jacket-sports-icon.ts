import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siJacketSportsIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 2a3 3 0 00-3 3c0 2.6 4 4.4 4 7 0-2.6 4-4.4 4-7a3 3 0 00-3-3"
    />
    <svg:path d="M12 12v10" />
    <svg:path d="M18 10v10a2 2 0 01-2 2H8a2 2 0 01-2-2V10" />
    <svg:path
      d="M18 20h3a1 1 0 001-1V9a7 7 0 00-7-7H9a7 7 0 00-7 7v10a1 1 0 001 1h3"
    />
    <svg:path d="M2 16h4" />
    <svg:path d="M22 16h-4" />
    <svg:path d="M6 18h12" />
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
export class SiJacketSportsIcon {
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
