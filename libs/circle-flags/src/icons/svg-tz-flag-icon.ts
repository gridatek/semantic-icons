import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tz-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#eee" d="M0 0h512v512H0z" />
        <path
          fill="#ffda44"
          d="M399 0 167 167 0 399v45l68 68h45l232-167 167-232V68L444 0Z"
        />
        <path fill="#333" d="M444 0 0 444v68h68L512 68V0Z" />
        <path fill="#338af3" d="m113 512 399-399v399z" />
        <path fill="#6da544" d="M0 399V0h399Z" />
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
export class SvgTzFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
