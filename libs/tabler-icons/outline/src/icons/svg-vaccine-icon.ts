import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-vaccine-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-vaccine"
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
      <path d="M17 3l4 4" />
      <path d="M19 5l-4.5 4.5" />
      <path d="M11.5 6.5l6 6" />
      <path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5" />
      <path d="M7.5 12.5l1.5 1.5" />
      <path d="M10.5 9.5l1.5 1.5" />
      <path d="M3 21l3 -3" />
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
export class SvgVaccineIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
