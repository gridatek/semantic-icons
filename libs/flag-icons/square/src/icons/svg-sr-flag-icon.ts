import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sr-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-sr"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#377e3f" d="M0 0h512v512H0z" />
      <path fill="#fff" d="M0 102.4h512v307.2H0z" />
      <path fill="#b40a2d" d="M0 153.6h512v204.8H0z" />
      <path
        fill="#ecc81d"
        d="m255.9 163.4 60.2 185.2-157.6-114.5h194.8L195.7 348.6z"
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
export class SvgSrFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
