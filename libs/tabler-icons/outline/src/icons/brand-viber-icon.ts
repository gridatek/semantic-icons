import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siBrandViberIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M12 19q -.515 0 -1 -.015l-4 3.015v-3.5c-2.5 -.75 -4 -2.904 -4 -7.5c0 -6.5 3 -8 9 -8s9 1.5 9 8s-3 8 -9 8"
    />
    <svg:path
      d="M11.729 14.664c.725 .396 1.379 .65 1.802 .793a.84 .84 0 0 0 .863 -.215l.606 -.606l-1.633 -1.089a.46 .46 0 0 0 -.58 .058l-1.058 1.059"
    />
    <svg:path
      d="M11.729 14.664a9.8 9.8 0 0 1 -2.243 -1.65a9.8 9.8 0 0 1 -1.65 -2.242"
    />
    <svg:path
      d="M7.836 10.772a12 12 0 0 1 -.793 -1.803a.84 .84 0 0 1 .215 -.863l.606 -.606l1.089 1.633a.46 .46 0 0 1 -.058 .58l-1.059 1.059"
    />
    <svg:path d="M17 10a4 4 0 0 0 -4 -4" />
    <svg:path d="M14 10a1 1 0 0 0 -1 -1" />
  `,
  host: {
    role: 'img',
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
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrandViberIcon {
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
