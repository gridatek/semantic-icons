import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siAirplaneSmallIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.5 7.5C16.5 4.5 18 4 19 5s.5 2.5-2.5 5.5l4.017 6.695a1.2 1.2 0 01-.18 1.469l-.987.986a1.2 1.2 0 01-1.7 0L12.5 14.5 8 18l1 2-1.15 1.15a1.2 1.2 0 01-1.7 0l-3.3-3.3a1.2 1.2 0 010-1.7L4 15l2 1 3.5-4.5-5.15-5.15a1.2 1.2 0 010-1.7l.986-.986a1.2 1.2 0 011.469-.181z"
    />
    <svg:path d="m16 2 6 6" />
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
export class SiAirplaneSmallIcon {
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
