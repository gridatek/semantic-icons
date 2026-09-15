import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siParkIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 18h10" />
    <svg:path
      d="M13.248 9.998A4.5 4.5 0 0 0 11.75 8.6V8a1 1 0 0 0-7.5 0 4.9 4.9 0 0 0 2.25 9H8"
    />
    <svg:path d="m15 14-2 6" />
    <svg:path d="m19 14 2 6" />
    <svg:path d="M21 14h-8" />
    <svg:path d="M8 20v-5.922a2 2 0 0 0-.586-1.414L6.5 11.75" />
    <svg:path d="M9.205 12.795 8 14" />
    <svg:circle cx="19" cy="6" r="2" />
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
export class SiParkIcon {
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
