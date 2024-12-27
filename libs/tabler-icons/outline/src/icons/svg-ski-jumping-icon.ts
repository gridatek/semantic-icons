import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ski-jumping-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-ski-jumping"
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
      <path d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M17 17.5l-5 -4.5v-6l5 4" />
      <path d="M7 17.5l5 -4.5" />
      <path d="M15.103 21.58l6.762 -14.502a2 2 0 0 0 -.968 -2.657" />
      <path d="M8.897 21.58l-6.762 -14.503a2 2 0 0 1 .968 -2.657" />
      <path d="M7 11l5 -4" />
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
export class SvgSkiJumpingIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
