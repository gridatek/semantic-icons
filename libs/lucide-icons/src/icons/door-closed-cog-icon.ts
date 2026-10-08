import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siDoorClosedCogIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m14.305 19.53.923-.382" />
    <svg:path d="m15.229 16.852-.924-.383" />
    <svg:path d="m16.852 15.228-.383-.923" />
    <svg:path d="m16.852 20.773-.383.924" />
    <svg:path d="M19 10.35V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
    <svg:path d="m19.148 15.228.383-.923" />
    <svg:path d="m19.53 21.697-.382-.924" />
    <svg:path d="M2 21h8.58" />
    <svg:path d="m20.773 16.852.922-.383" />
    <svg:path d="m20.773 19.148.922.383" />
    <svg:path d="M9 12h.01" />
    <svg:circle cx="18" cy="18" r="3" />
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
export class SiDoorClosedCogIcon {
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
