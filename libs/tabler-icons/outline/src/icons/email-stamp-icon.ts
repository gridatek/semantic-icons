import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siEmailStampIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M7.586 4.586a2 2 0 0 0 -1.414 -.586h-.172a2 2 0 0 0 -2 2v.172a2 2 0 0 0 .586 1.414a2 2 0 0 1 0 2.828a2 2 0 0 0 -.586 1.414v.344a2 2 0 0 0 .586 1.414c.4 .4 .595 .928 .585 1.452c-.01 .5 -.204 .995 -.585 1.376a2 2 0 0 0 -.586 1.414v.172a2 2 0 0 0 2 2h.172a2 2 0 0 0 1.414 -.586a2 2 0 0 1 2.828 0a2 2 0 0 0 1.414 .586h.344a2 2 0 0 0 1.414 -.586a2 2 0 0 1 2.828 0a2 2 0 0 0 1.414 .586h.172a2 2 0 0 0 2 -2v-.172a2 2 0 0 0 -.586 -1.414a1.996 1.996 0 0 1 0 -2.828a2 2 0 0 0 .586 -1.414v-.344a2 2 0 0 0 -.586 -1.414a2 2 0 0 1 0 -2.828a2 2 0 0 0 .586 -1.414v-.172a2 2 0 0 0 -2 -2h-.172a2 2 0 0 0 -1.414 .586a2 2 0 0 1 -2.828 0a2 2 0 0 0 -1.414 -.586h-.344a2 2 0 0 0 -1.414 .586a2 2 0 0 1 -2.828 0"
    />
    <svg:path d="M10 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <svg:path d="M9 15c0 -1.105 .672 -2 1.5 -2h3c.828 0 1.5 .895 1.5 2" />
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
export class SiEmailStampIcon {
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
