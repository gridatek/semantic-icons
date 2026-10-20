import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siGraphStarIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m12.342 9.316 1.764-3.527" />
    <svg:path d="m12.59 14.545 2.35 3.759" />
    <svg:path d="m13.982 12.332 4.03.447" />
    <svg:path d="M5.414 17.586 8.88 14.12" />
    <svg:path d="M9.025 9.742 5.317 5.505" />
    <svg:circle cx="11" cy="12" r="3" />
    <svg:circle cx="15" cy="4" r="2" />
    <svg:circle cx="16" cy="20" r="2" />
    <svg:circle cx="20" cy="13" r="2" />
    <svg:circle cx="4" cy="19" r="2" />
    <svg:circle cx="4" cy="4" r="2" />
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
export class SiGraphStarIcon {
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
