import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-math-integrals-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-math-integrals"
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
      <path d="M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2" />
      <path d="M11 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2" />
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
export class SvgMathIntegralsIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
