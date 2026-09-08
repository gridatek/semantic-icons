import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siVirusOffIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10.01 10h.01" />
    <svg:path d="M12 14.991h.01" />
    <svg:path d="M12 22v-3" />
    <svg:path d="M12 2v3" />
    <svg:path d="M13 22h-2" />
    <svg:path d="M13 2h-2" />
    <svg:path d="m16.5 19.794-1-1.733" />
    <svg:path d="m16.5 4.205-1 1.732" />
    <svg:path d="M18.891 13.235a7 7 0 00-8.126-8.126" />
    <svg:path d="m19.794 7.5-1.732 1" />
    <svg:path d="M2 12h3" />
    <svg:path d="M2 13v-2" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M22 12h-3" />
    <svg:path d="M22 13v-2" />
    <svg:path d="m4.206 16.5 1.732-1" />
    <svg:path d="m4.206 7.5 1.732 1" />
    <svg:path d="M7.05 7.05a7 7 0 009.9 9.9" />
    <svg:path d="m7.5 19.794 1-1.733" />
    <svg:path d="M9 12h.01" />
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
export class SiVirusOffIcon {
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
