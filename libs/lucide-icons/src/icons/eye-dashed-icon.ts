import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siEyeDashedIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M13.054 18.946a11 11 0 0 1-2.11 0" />
    <svg:path d="M13.054 5.054a11 11 0 0 0-2.11-.001" />
    <svg:path d="M17.072 6.274a11 11 0 0 1 1.753 1.173" />
    <svg:path d="M18.825 16.552a11 11 0 0 1-1.753 1.174" />
    <svg:path
      d="M2.514 13.303a11 11 0 0 1-.452-.954 1 1 0 0 1 0-.697 11 11 0 0 1 .45-.955"
    />
    <svg:path
      d="M21.485 10.697a11 11 0 0 1 .453.955 1 1 0 0 1 0 .697 11 11 0 0 1-.453.954"
    />
    <svg:path d="M5.173 7.448a11 11 0 0 1 1.753-1.174" />
    <svg:path d="M6.926 17.726a11 11 0 0 1-1.753-1.174" />
    <svg:circle cx="12" cy="12" r="3" />
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
export class SiEyeDashedIcon {
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
