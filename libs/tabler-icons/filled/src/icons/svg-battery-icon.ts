import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-battery-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-battery"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17 6a3 3 0 0 1 2.995 2.824l.005 .176v.086l.052 .019a1.5 1.5 0 0 1 .941 1.25l.007 .145v3a1.5 1.5 0 0 1 -.948 1.395l-.052 .018v.087a3 3 0 0 1 -2.824 2.995l-.176 .005h-11a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a3 3 0 0 1 2.824 -2.995l.176 -.005h11z"
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
export class SvgBatteryIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
