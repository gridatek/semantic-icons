import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cg-flag-icon',
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
        <path
          fill="#ffda44"
          d="M384 0h128v128L352 352 128 512H0V384l160-224Z"
        />
        <path fill="#6da544" d="M0 384 384 0H0Z" />
        <path fill="#d80027" d="M512 128 128 512h384z" />
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
export class SvgCgFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
