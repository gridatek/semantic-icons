import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tt-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-tt"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#fff" d="M0 0h512v512H0z" style="width:0" />
      <g fill-rule="evenodd">
        <path fill="#e00000" d="M371 512 0 1v510.7zM141 0l371 511V.2z" />
        <path fill="#000001" d="M22.2.2h94.9l374.5 511.3h-97.9z" />
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
export class SvgTtFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
