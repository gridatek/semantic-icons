import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-th-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-th"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="#f4f5f8" d="M0 0h640v480H0z" />
        <path fill="#2d2a4a" d="M0 162.5h640v160H0z" />
        <path fill="#a51931" d="M0 0h640v82.5H0zm0 400h640v80H0z" />
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
export class SvgThFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
