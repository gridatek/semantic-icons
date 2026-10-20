import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPerfumeBottleIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M 5 22 H 11.072" />
    <svg:path d="M15 5 C 23 4 23.328 12.676 20 14.536" />
    <svg:path d="M15.802 10.308 C 14.776 9.465 14 8.496 14 7" />
    <svg:path d="M2 2h.01" />
    <svg:path d="M2 7h.01" />
    <svg:path d="M5 4.5h.01" />
    <svg:path
      d="M8.127 22 A 8 8 0 0 1 4 15 3 3 0 0 1 4.879 12.879C 6.879 10.879 10 10 10 7"
    />
    <svg:circle cx="18" cy="18" r="4" />
    <svg:rect x="9" y="2" width="6" height="5" rx="1" />
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
export class SiPerfumeBottleIcon {
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
