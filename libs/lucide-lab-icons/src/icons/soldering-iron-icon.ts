import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siSolderingIronIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.356 9.356a1.2 1.2 0 010-1.712l.351-.351A1 1 0 0112.414 7h1.172a1 1 0 00.707-.293l3.351-3.351a1.2 1.2 0 011.712 0l1.288 1.288a1.2 1.2 0 010 1.712l-3.351 3.351a1 1 0 00-.293.707v1.172a1 1 0 01-.293.707l-.351.351a1.2 1.2 0 01-1.712 0z"
    />
    <svg:path
      d="m11.5 9.5-7.243 7.244a2 2 0 00-.407.586l-1.798 3.956a.5.5 0 00.662.662L6.67 20.15a2 2 0 00.586-.406L14.5 12.5"
    />
    <svg:path d="m20 4 .293-.293A2.4 2.4 0 0122 3" />
    <svg:path d="M3 2q2 2.5 0 5 -2 2.5 0 5" />
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
export class SiSolderingIronIcon {
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
