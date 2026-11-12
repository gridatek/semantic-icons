import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siSettingsKeyIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M10.325 19.683c-.013 -.052 -.028 -.104 -.045 -.154c-.16 -.465 -.512 -.843 -.971 -1.033c-.509 -.211 -1.087 -.166 -1.557 .121c-1.543 .94 -3.31 -.826 -2.37 -2.37c.286 -.47 .331 -1.048 .12 -1.556c-.21 -.508 -.651 -.886 -1.185 -1.016c-1.756 -.426 -1.756 -2.924 0 -3.35c.535 -.13 .976 -.507 1.187 -1.016c.211 -.509 .166 -1.087 -.121 -1.557c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0c.13 .535 .507 .976 1.016 1.187c.509 .211 1.087 .166 1.557 -.121c1.543 -.94 3.31 .826 2.37 2.37c-.286 .47 -.331 1.048 -.12 1.556c.21 .508 .651 .886 1.185 1.016c.476 .115 .823 .383 1.041 .72"
    />
    <svg:path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    <svg:path d="M17 20l-1 -1" />
    <svg:path
      d="M18.586 18.414a2 2 0 0 0 2.828 -2.828a2 2 0 1 0 -2.828 2.828"
    />
    <svg:path d="M14 21l1 1l3.5 -3.5" />
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
export class SiSettingsKeyIcon {
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
