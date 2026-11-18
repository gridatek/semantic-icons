import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siCheeseIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M14 11a3 3 0 01-6 0 5 5 0 016 0" />
    <svg:path
      d="M14.292 2.436a1.55 1.55 0 011.463-.088l.278.13A10.33 10.33 0 0122 11v8a2 2 0 01-2 2h-1.75a.28.28 0 01-.265-.25 2 2 0 00-3.97 0 .28.28 0 01-.265.25H4a2 2 0 01-2-2v-.75a.28.28 0 01.25-.265 2 2 0 00-.046-3.975.21.21 0 01-.204-.214v-2.678a2 2 0 01.952-1.703l6.062-3.732a.3.3 0 01.27-.002A2.5 2.5 0 0013 3.5l-.002-.104a.3.3 0 01.122-.24z"
    />
    <svg:path d="M22 11h-8" />
    <svg:path d="M8 11H2" />
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
export class SiCheeseIcon {
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
