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
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="la-a">
          <path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        clip-path="url(#la-a)"
        transform="translate(-128)scale(.72249)"
      >
        <path fill="#ce1126" d="M0 0h1063v708.7H0z" />
        <path fill="#002868" d="M0 176h1063v356.6H0z" />
        <path
          fill="#fff"
          d="M684.2 354.3a152.7 152.7 0 1 1-305.4 0 152.7 152.7 0 0 1 305.4 0"
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
