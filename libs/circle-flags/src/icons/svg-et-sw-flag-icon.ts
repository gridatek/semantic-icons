import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-et-sw-flag-icon',
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
        <path fill="#6da544" d="M0 0h512v512H0Z" />
        <path fill="#0052b4" d="M0 0v80l64 176L0 432v80l256-256Z" />
        <path fill="#eee" d="M0 80v80l64 96-64 96v80l176-176Z" />
        <path fill="#ffda44" d="m344 317 104-75H320l104 75-40-122z" />
        <path fill="#d80027" d="M0 160v192l96-96-96-96z" />
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
export class SvgEtSwFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
