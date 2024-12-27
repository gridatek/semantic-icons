import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cliff-jumping-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-cliff-jumping"
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
      <path d="M14 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M10.5 18l2.5 2l2 -2" />
      <path d="M18 21l3 -3l-4 -2l-1 -5" />
      <path d="M10.5 7.5l2 3l3.5 .5l3 -2l.5 -3" />
      <path d="M4 21v-1l2 -3l.5 -2.5l1.5 -2.5l-1 -5l1 -3l-1 -1l-2 .5l-2 -.5" />
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
export class SvgCliffJumpingIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
