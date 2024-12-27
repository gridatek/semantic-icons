import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-plantscale-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.00001 12C2.00001 6.477 6.47701 2 12 2C16.0605 2 19.556 4.42 21.1225 7.897L7.89751 21.122C7.33283 20.8676 6.79301 20.5613 6.28501 20.207L14.492 12H12L4.92901 19.071C3.99909 18.1434 3.26162 17.0412 2.75897 15.8278C2.25631 14.6143 1.99839 13.3135 2.00001 12ZM21.9995 12.0035L12.003 22C17.523 21.998 21.998 17.5235 21.9995 12.0035Z"
        fill="#323544"
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
export class SvgPlantscaleIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
