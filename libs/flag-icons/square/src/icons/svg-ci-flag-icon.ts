import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ci-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-ci"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd">
        <path fill="#00cd00" d="M341.5 0H512v512H341.5z" />
        <path fill="#ff9a00" d="M0 0h170.3v512H0z" />
        <path fill="#fff" d="M170.3 0h171.2v512H170.3z" />
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
export class SvgCiFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
