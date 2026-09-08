import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siLighthouseIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 3V2" />
    <svg:path d="M16.066 16.865 7 22l2-11V6a3 3 0 016 0v5l2 11" />
    <svg:path d="m19.792 4.5.866-.5" />
    <svg:path d="m19.797 13.5.866.5" />
    <svg:path d="M21 9h1" />
    <svg:path d="M3 9H2" />
    <svg:path d="m4.203 13.5-.866.5" />
    <svg:path d="M4.208 4.5 3.342 4" />
    <svg:path d="M5.5 22h13" />
    <svg:path d="m7.932 16.875 7.377-4.178" />
    <svg:path d="M8 11h8" />
    <svg:path d="M8 7h8" />
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
export class SiLighthouseIcon {
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
