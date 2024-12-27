import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-building-stadium-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-building-stadium"
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
      <path d="M12 12m-8 0a8 2 0 1 0 16 0a8 2 0 1 0 -16 0" />
      <path
        d="M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435 -.225 6 -1.07 6 -2v-7"
      />
      <path d="M15 6h4v-3h-4v7" />
      <path d="M7 6h4v-3h-4v7" />
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
export class SvgBuildingStadiumIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
