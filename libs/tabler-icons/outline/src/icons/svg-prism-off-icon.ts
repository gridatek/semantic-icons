import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-prism-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-prism-off"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12v10" />
      <path
        d="M17.957 17.952l-4.937 3.703a1.7 1.7 0 0 1 -2.04 0l-5.98 -4.485a2.5 2.5 0 0 1 -1 -2v-11.17m3 -1h12a1 1 0 0 1 1 1v11.17c0 .25 -.037 .495 -.109 .729"
      />
      <path d="M12.688 8.7a1.7 1.7 0 0 0 .357 -.214l6.655 -5.186" />
      <path d="M3 3l18 18" />
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
export class SvgPrismOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
