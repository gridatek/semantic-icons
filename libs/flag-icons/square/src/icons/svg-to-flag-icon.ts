import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-to-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-to"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#c10000" d="M0 0h512v512H0z" />
        <path fill="#fff" d="M0 0h218.3v175H0z" />
        <g fill="#c10000">
          <path d="M89.8 27.3h34.8v121.9H89.8z" />
          <path d="M168.2 70.8v34.8H46.3V70.8z" />
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
export class SvgToFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
