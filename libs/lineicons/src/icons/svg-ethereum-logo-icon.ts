import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ethereum-logo-icon',
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
        d="M6.09277 12.1854L11.9983 2L17.9049 12.1854L11.9983 15.8144L6.09277 12.1854Z"
        fill="#323544"
      />
      <path
        d="M6.09277 13.3499L11.9983 22L17.9082 13.3499L11.9983 16.9767L6.09277 13.3499Z"
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
export class SvgEthereumLogoIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
