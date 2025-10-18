import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bug-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 20v-8" />
    <svg:path d="M14.12 3.88 16 2" />
    <svg:path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" />
    <svg:path d="M18 12.34V11a4 4 0 0 0-4-4h-1.3" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M21 5a4 4 0 0 1-3.55 3.97" />
    <svg:path d="M22 13h-3.34" />
    <svg:path d="M3 21a4 4 0 0 1 3.81-4" />
    <svg:path d="M6 13H2" />
    <svg:path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" />
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
export class SiBugOffIcon {
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
