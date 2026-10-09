import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siBlobDashedIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M10.899 20.992q .498 .008 1 .008" />
    <svg:path d="M15.989 20.781q .506 -.079 .979 -.201" />
    <svg:path d="M20.249 18.312q .247 -.421 .412 -.909" />
    <svg:path d="M20.856 13.346q -.08 -.492 -.201 -.98" />
    <svg:path d="M19.07 8.603a13 13 0 0 0 -.559 -.829" />
    <svg:path d="M15.526 5.004a8 8 0 0 0 -.892 -.451" />
    <svg:path d="M10.621 4.149a7 7 0 0 0 -.958 .284" />
    <svg:path d="M6.329 6.756q -.34 .367 -.647 .762" />
    <svg:path d="M3.727 11.103q -.17 .472 -.301 .953" />
    <svg:path d="M3.057 16.115q .06 .519 .188 .982" />
    <svg:path d="M5.79 20.138l.107 .05q .446 .2 .94 .339" />
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
export class SiBlobDashedIcon {
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
