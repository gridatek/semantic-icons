import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siSprayCanIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m12 19 8-3" />
    <svg:path d="M14 6h-2" />
    <svg:path d="M18 8.172V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3.172" />
    <svg:path d="m20 11-8 3" />
    <svg:path
      d="M20 20a2 2 0 01-2 2h-4a2 2 0 01-2-2v-9a3 3 0 013-3h2a3 3 0 013 3z"
    />
    <svg:path d="M4 10h.01" />
    <svg:path d="M4 2h.01" />
    <svg:path d="M4 6h.01" />
    <svg:path d="M8 4h.01" />
    <svg:path d="M8 8h.01" />
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
export class SiSprayCanIcon {
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
