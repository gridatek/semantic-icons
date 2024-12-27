import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gm-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-gm"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="red" d="M0 0h512v170.7H0z" />
        <path fill="#fff" d="M0 170.7h512V199H0z" />
        <path fill="#009" d="M0 199.1h512V313H0z" />
        <path fill="#fff" d="M0 312.9h512v28.4H0z" />
        <path fill="#090" d="M0 341.3h512V512H0z" />
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
export class SvgGmFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
