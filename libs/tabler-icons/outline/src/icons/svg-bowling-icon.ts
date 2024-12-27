import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bowling-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-bowling"
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
      <path d="M7 11v.01" />
      <path d="M11 10v.01" />
      <path d="M10 14v.01" />
      <path d="M11.059 6.07a8 8 0 1 0 .32 15.81" />
      <path d="M15.969 9h4" />
      <path
        d="M14.969 5c0 1.5 1 2 1 4c0 2.5 -2 4.5 -2 7c0 2.6 1.9 6 1.9 6h4.1s2 -3.4 2 -6c0 -2.5 -2 -4.5 -2 -7c0 -2 1 -2.5 1 -4a3 3 0 1 0 -6 0"
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
export class SvgBowlingIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
