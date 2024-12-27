import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-temperature-snow-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-temperature-snow"
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
      <path d="M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5" />
      <path d="M4 9h4" />
      <path d="M14.75 4l1 2h2.25" />
      <path d="M17 4l-3 5l2 3" />
      <path d="M20.25 10l-1.25 2l1.25 2" />
      <path d="M22 12h-6l-2 3" />
      <path d="M18 18h-2.25l-1 2" />
      <path d="M17 20l-3 -5h-1" />
      <path d="M12 9l2.088 .008" />
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
export class SvgTemperatureSnowIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
