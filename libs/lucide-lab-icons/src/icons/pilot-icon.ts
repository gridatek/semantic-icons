import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPilotIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10 14.5v.5" />
    <svg:path d="M14 14.5v.5" />
    <svg:path d="M18 10h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" />
    <svg:path d="M18 9v10a2 2 0 0 0 2 2" />
    <svg:path d="M4 21a2 2 0 0 0 2-2V9" />
    <svg:path d="M6 15a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4" />
    <svg:path d="M6 17H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2" />
    <svg:circle cx="15.5" cy="6.5" r="3.5" />
    <svg:circle cx="8.5" cy="6.5" r="3.5" />
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
export class SiPilotIcon {
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
