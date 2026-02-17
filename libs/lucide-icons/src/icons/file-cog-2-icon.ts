import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siFileCog2Icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8z"
    />
    <svg:path d="M20 8v12a2 2 0 0 1-2 2h-4.182" />
    <svg:path d="m3.305 19.53.923-.382" />
    <svg:path d="M4 10.592V4a2 2 0 0 1 2-2h8" />
    <svg:path d="m4.228 16.852-.924-.383" />
    <svg:path d="m5.852 15.228-.383-.923" />
    <svg:path d="m5.852 20.772-.383.924" />
    <svg:path d="m8.148 15.228.383-.923" />
    <svg:path d="m8.53 21.696-.382-.924" />
    <svg:path d="m9.773 16.852.922-.383" />
    <svg:path d="m9.773 19.148.922.383" />
    <svg:circle cx="7" cy="18" r="3" />
  `,
  host: {
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
export class SiFileCog2Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

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
