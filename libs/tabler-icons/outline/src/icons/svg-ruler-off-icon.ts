import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ruler-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-ruler-off"
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
      <path
        d="M8 4h11a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-4m-3.713 .299a1 1 0 0 0 -.287 .701v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14c0 -.284 .118 -.54 .308 -.722"
      />
      <path d="M4 8h2" />
      <path d="M4 12h3" />
      <path d="M4 16h2" />
      <path d="M12 4v3" />
      <path d="M16 4v2" />
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
export class SvgRulerOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
