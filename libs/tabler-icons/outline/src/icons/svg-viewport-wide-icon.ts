import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-viewport-wide-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-viewport-wide"
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
      <path d="M10 12h-7l3 -3" />
      <path d="M6 15l-3 -3" />
      <path d="M14 12h7l-3 -3" />
      <path d="M18 15l3 -3" />
      <path d="M3 6v-1a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v1" />
      <path d="M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-1" />
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
export class SvgViewportWideIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
