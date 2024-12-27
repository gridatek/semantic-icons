import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bv-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bv"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="bv-a">
          <path fill-opacity=".7" d="M0 0h512v512H0z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#bv-a)">
        <path fill="#fff" d="M-68 0h699.7v512H-68z" />
        <path
          fill="#d72828"
          d="M-93-77.8h218.7v276.2H-93zM249.4-.6h381v199h-381zM-67.6 320h190.4v190.3H-67.5zm319.6 2.1h378.3v188.2H252z"
        />
        <path fill="#003897" d="M156.7-25.4H221v535.7h-64.5z" />
        <path fill="#003897" d="M-67.5 224.8h697.8v63.5H-67.5z" />
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
export class SvgBvFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
