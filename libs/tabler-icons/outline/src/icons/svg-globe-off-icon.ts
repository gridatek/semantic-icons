import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-globe-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-globe-off"
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
        d="M7.353 7.355a4 4 0 0 0 5.29 5.293m2.007 -2.009a4 4 0 0 0 -5.3 -5.284"
      />
      <path
        d="M5.75 15a8.015 8.015 0 0 0 9.792 .557m2.02 -1.998a8.015 8.015 0 0 0 -2.562 -11.559"
      />
      <path d="M11 17v4" />
      <path d="M7 21h8" />
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
export class SvgGlobeOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
