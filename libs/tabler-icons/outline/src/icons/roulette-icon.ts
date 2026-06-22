import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siRouletteIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M10.586 10.586l-1.586 -1.586" />
    <svg:path d="M13.414 10.586l1.586 -1.586" />
    <svg:path d="M13.414 13.414l1.586 1.586" />
    <svg:path d="M10.586 13.414l-1.586 1.586" />
    <svg:path d="M14 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
    <svg:path d="M16.5 4.206l-.5 .866" />
    <svg:path d="M7.5 19.794l.5 -.866" />
    <svg:path d="M19.794 7.5l-.866 .5" />
    <svg:path d="M4.206 16.5l.866 -.5" />
    <svg:path d="M7.5 4.206l.5 .866" />
    <svg:path d="M16.5 19.794l-.5 -.866" />
    <svg:path d="M4.206 7.5l.866 .5" />
    <svg:path d="M19.794 16.5l-.866 -.5" />
    <svg:path d="M12 3v1" />
    <svg:path d="M12 21v-1" />
    <svg:path d="M21 12h-1" />
    <svg:path d="M3 12h1" />
    <svg:path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" />
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
export class SiRouletteIcon {
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
