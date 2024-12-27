import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-abacus-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-abacus-off"
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
      <path d="M5 5v16" />
      <path d="M19 21v-2m0 -4v-12" />
      <path d="M5 7h2m4 0h8" />
      <path d="M5 15h10" />
      <path d="M8 13v4" />
      <path d="M11 13v4" />
      <path d="M16 16v1" />
      <path d="M14 5v4" />
      <path d="M11 5v2" />
      <path d="M8 8v1" />
      <path d="M3 21h18" />
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
export class SvgAbacusOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
