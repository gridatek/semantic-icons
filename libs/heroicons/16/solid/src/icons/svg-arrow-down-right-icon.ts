import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-arrow-down-right-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        fill-rule="evenodd"
        d="M4.22 4.22a.75.75 0 0 0 0 1.06l5.22 5.22H5.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-1.5 0v3.69L5.28 4.22a.75.75 0 0 0-1.06 0Z"
        clip-rule="evenodd"
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
export class SvgArrowDownRightIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
