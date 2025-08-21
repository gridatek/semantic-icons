import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-table-config-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"
    />
    <svg:path d="m14.3 19.6 1-.4" />
    <svg:path d="M15 3v7.5" />
    <svg:path d="m15.2 16.9-.9-.3" />
    <svg:path d="m16.6 21.7.3-.9" />
    <svg:path d="m16.8 15.3-.4-1" />
    <svg:path d="m19.1 15.2.3-.9" />
    <svg:path d="m19.6 21.7-.4-1" />
    <svg:path d="m20.7 16.8 1-.4" />
    <svg:path d="m21.7 19.4-.9-.3" />
    <svg:path d="M9 3v18" />
    <svg:circle cx="18" cy="18" r="3" />
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
export class SiTableConfigIcon {
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
