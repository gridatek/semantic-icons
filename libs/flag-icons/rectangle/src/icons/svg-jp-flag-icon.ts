import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-jp-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-jp"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="jp-a">
          <path fill-opacity=".7" d="M-88 32h640v480H-88z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#jp-a)"
        transform="translate(88 -32)"
      >
        <path fill="#fff" d="M-128 32h720v480h-720z" />
        <circle
          cx="523.1"
          cy="344.1"
          r="194.9"
          fill="#bc002d"
          transform="translate(-168.4 8.6)scale(.76554)"
        />
      </g>
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
export class SvgJpFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
