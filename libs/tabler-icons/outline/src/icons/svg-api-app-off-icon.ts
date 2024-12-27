import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-api-app-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-api-app-off"
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
      <path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5" />
      <path d="M15 15v3.5a2.5 2.5 0 1 1 -5 0v-.5" />
      <path d="M13 9h5.5a2.5 2.5 0 1 1 0 5h-.5" />
      <path d="M9 12v-3m.042 -3.957a2.5 2.5 0 0 1 4.958 .457v.5" />
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
export class SvgApiAppOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
