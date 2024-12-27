import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-la-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-la"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="la-a">
          <path fill-opacity=".7" d="M0 0h640v480H0z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" clip-path="url(#la-a)">
        <path fill="#ce1126" d="M-40 0h720v480H-40z" />
        <path fill="#002868" d="M-40 119.3h720v241.4H-40z" />
        <path
          fill="#fff"
          d="M423.4 240a103.4 103.4 0 1 1-206.8 0 103.4 103.4 0 1 1 206.8 0"
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
export class SvgLaFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
