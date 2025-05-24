import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-ease-out-control-point-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M21 4a1 1 0 0 1 0 2c-1.097 0 -2.317 .361 -3.64 1.068c-2.373 1.265 -4.958 3.562 -7.607 6.59a68 68 0 0 0 -4.25 5.42a69 69 0 0 0 -1.003 1.456l-.455 .69q -.132 .204 -.196 .306a1 1 0 1 1 -1.696 -1.06l.286 -.445l.173 -.264a73 73 0 0 1 1.26 -1.839a70 70 0 0 1 4.376 -5.58c2.795 -3.195 5.544 -5.638 8.171 -7.04c1.592 -.848 3.122 -1.302 4.581 -1.302m-16 -2c1.306 0 2.418 .835 2.83 2h1.17a1 1 0 1 1 0 2h-1.171a3.001 3.001 0 1 1 -2.829 -4"
    />
    <svg:path d="M14 4a1 1 0 0 1 0 2h-2a1 1 0 0 1 0 -2z" />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEaseOutControlPointIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
