import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siRotateCwFadingClockIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 3a9.75 9.75 0 0 1 6.74 2.74" />
    <svg:path d="M18.74 5.74 21 8" />
    <svg:path d="M21 8V3" />
    <svg:path d="M7.5 19.794c-6-3.464-6-12.124 0-15.588" />
    <svg:path d="M7.5 4.206A9 9 0 0 1 12 3" />
    <svg:path d="M12 7v5l4 2" />
    <svg:path d="M14 20.775A9 9 0 0 1 12 21" />
    <svg:path d="M19 17.656a9 9 0 0 1-1.5 1.456" />
    <svg:path d="M21 12a9 9 0 0 1-.228 2" />
    <svg:path d="M21 8h-5" />
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
export class SiRotateCwFadingClockIcon {
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
