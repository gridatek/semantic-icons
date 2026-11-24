import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siDiagramSankeyIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 12c-2.534 0-4.058-.492-5.093-1.08-1.065-.606-1.823-1.425-2.736-2.52-.85-1.02-1.97-2.472-3.557-3.557C7.914 3.68 5.814 3 3 3a1 1 0 00-1 1v3a1 1 0 001 1c1.935 0 3.023.444 3.792.97.881.602 1.512 1.4 2.537 2.63.7.84 1.548 1.827 2.691 2.718"
    />
    <svg:path
      d="M3 16a1 1 0 00-1 1v3a1 1 0 001 1c10 0 10-4 18-4a1 1 0 001-1v-3a1 1 0 00-1-1c-8 0-8 4-18 4"
    />
    <svg:path d="M3 3h18a1 1 0 011 1v3a1 1 0 01-1 1h-8.036" />
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
export class SiDiagramSankeyIcon {
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
