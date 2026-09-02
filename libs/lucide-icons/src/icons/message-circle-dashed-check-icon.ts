import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siMessageCircleDashedCheckIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10.1 2.182a10 10 0 013.8 0" />
    <svg:path d="M13.9 21.818a10 10 0 01-3.8 0" />
    <svg:path d="M17.609 3.72a10 10 0 012.69 2.7" />
    <svg:path d="M2.182 13.9a10 10 0 010-3.8" />
    <svg:path d="M20.28 17.61a10 10 0 01-2.7 2.69" />
    <svg:path d="M21.818 10.1a10 10 0 010 3.8" />
    <svg:path d="M3.721 6.391a10 10 0 012.7-2.69" />
    <svg:path d="m6.163 21.117-2.906.85a1 1 0 01-1.236-1.169l.965-2.98" />
    <svg:path d="m16 9-5.5 5.5L8 12" />
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
export class SiMessageCircleDashedCheckIcon {
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
