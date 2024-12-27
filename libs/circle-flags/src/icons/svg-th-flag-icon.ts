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
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path
          fill="#d80027"
          d="M0 0h512v89l-79.2 163.7L512 423v89H0v-89l82.7-169.6L0 89z"
        />
        <path
          fill="#eee"
          d="M0 89h512v78l-42.6 91.2L512 345v78H0v-78l40-92.5L0 167z"
        />
        <path fill="#0052b4" d="M0 167h512v178H0z" />
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
