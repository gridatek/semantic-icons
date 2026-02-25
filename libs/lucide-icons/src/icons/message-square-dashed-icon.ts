import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siMessageSquareDashedIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M14 3h2" />
    <svg:path d="M16 19h-2" />
    <svg:path d="M2 12v-2" />
    <svg:path d="M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149" />
    <svg:path d="M20 19a2 2 0 0 0 2-2v-1" />
    <svg:path d="M22 10v2" />
    <svg:path d="M22 6V5a2 2 0 0 0-2-2" />
    <svg:path d="M4 3a2 2 0 0 0-2 2v1" />
    <svg:path d="M8 19h2" />
    <svg:path d="M8 3h2" />
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
export class SiMessageSquareDashedIcon {
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
