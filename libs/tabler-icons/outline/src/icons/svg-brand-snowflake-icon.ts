import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-brand-snowflake-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-snowflake"
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
      <path d="M14 21v-5.5l4.5 2.5" />
      <path d="M10 21v-5.5l-4.5 2.5" />
      <path d="M3.5 14.5l4.5 -2.5l-4.5 -2.5" />
      <path d="M20.5 9.5l-4.5 2.5l4.5 2.5" />
      <path d="M10 3v5.5l-4.5 -2.5" />
      <path d="M14 3v5.5l4.5 -2.5" />
      <path d="M12 11l1 1l-1 1l-1 -1z" />
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
export class SvgBrandSnowflakeIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
