import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-elm-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Elm</title>
      <path
        d="M23.986 12.806V23.2l-5.197-5.197zM6.796 6.01H17.19l-5.197 5.197zm9.275-1.12H5.677L.8.015h10.394zm7.116 7.117L17.99 6.81l-5.197 5.197 5.197 5.197zm.813-.813L12.806 0H24zM0 23.2V.813l11.194 11.194zm23.187.8H.8l11.193-11.194Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgElmIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
