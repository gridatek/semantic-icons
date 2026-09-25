import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siMonsteraLeafIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M 20.5 15 L 16 17.5" />
    <svg:path d="M13 2.5C13.5 14 11 20 6.5 22" />
    <svg:path d="m17 8 1.5-.866" />
    <svg:path d="M19.5 10.5 17 12" />
    <svg:path
      d="M6.26 18.4c2.383.5 3.336-.5 6.195 2.496s7.17-.704 8.101-3.994c.507-1.79.92-4.295-.775-7.922-1.694-3.628-3.984-5.106-6.684-6.98C9.735 3.503 7.223 5.286 5.5 7.5c-3.525 4.528-4.76 9.743.76 10.9"
    />
    <svg:path d="m6.5 7.134 2.5 2.5" />
    <svg:path d="M7.5 14.5 4 11" />
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
export class SiMonsteraLeafIcon {
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
