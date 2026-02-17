import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siScissorsSquareDashedBottomIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:line x1="5" y1="3" x2="19" y2="3" />
    <svg:line x1="3" y1="5" x2="3" y2="19" />
    <svg:line x1="21" y1="5" x2="21" y2="19" />
    <svg:line x1="9" y1="21" x2="10" y2="21" />
    <svg:line x1="14" y1="21" x2="15" y2="21" />
    <svg:path d="M 3 5 A2 2 0 0 1 5 3" />
    <svg:path d="M 19 3 A2 2 0 0 1 21 5" />
    <svg:path d="M 5 21 A2 2 0 0 1 3 19" />
    <svg:path d="M 21 19 A2 2 0 0 1 19 21" />
    <svg:circle cx="8.5" cy="8.5" r="1.5" />
    <svg:line x1="9.56066" y1="9.56066" x2="12" y2="12" />
    <svg:line x1="17" y1="17" x2="14.82" y2="14.82" />
    <svg:circle cx="8.5" cy="15.5" r="1.5" />
    <svg:line x1="9.56066" y1="14.43934" x2="17" y2="7" />
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
export class SiScissorsSquareDashedBottomIcon {
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
