import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siChocolateBarIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 2v10" />
    <svg:path
      d="M17 12V4.4a.4.4 0 00-.4-.4A1.6 1.6 0 0115 2.4a.4.4 0 00-.4-.4H9a2 2 0 00-2 2v8"
    />
    <svg:path
      d="M5 14a2 2 0 012-2h10a2 2 0 012 2v2a1 1 0 01-1 1 2 2 0 01-.9-.203l-1.2-.594a2 2 0 00-1.8 0l-1.2.594a2 2 0 01-1.8 0l-1.2-.594a2 2 0 00-1.8 0l-1.2.594a2 2 0 01-.9.198A1 1 0 015 16z"
    />
    <svg:path d="M7 16.748V20a2 2 0 002 2h6a2 2 0 002-2v-3.252" />
    <svg:path d="M7 7h10" />
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
export class SiChocolateBarIcon {
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
