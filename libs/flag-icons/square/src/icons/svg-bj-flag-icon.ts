import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bj-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bj"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="bj-a">
          <path fill="gray" d="M67.6-154h666v666h-666z" />
        </clipPath>
      </defs>
      <g clip-path="url(#bj-a)" transform="translate(-52 118.4)scale(.7688)">
        <g fill-rule="evenodd" stroke-width="1pt">
          <path fill="#319400" d="M0-154h333v666H0z" />
          <path fill="#ffd600" d="M333-154h666v333H333z" />
          <path fill="#de2110" d="M333 179h666v333H333z" />
        </g>
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
export class SvgBjFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
