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
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd">
        <path fill="#f4f5f8" d="M0 0h512v512H0z" />
        <path fill="#2d2a4a" d="M0 173.4h512V344H0z" />
        <path fill="#a51931" d="M0 0h512v88H0zm0 426.7h512V512H0z" />
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
