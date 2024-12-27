import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ktm-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>KTM</title>
      <path
        d="M0 15.735h3.354l.843-2.06 1.55 2.06h7.225l2.234-2.081-.372 2.081h2.83L20 13.675l-.32 2.06h3.052L24 9.99h-3.068l-2.486 2.191.48-2.19h-2.942l-3.209 3.216 1.342-3.938h4.907l.225-1.003H6.381l-.378 1.003h4.732l-1.994 5.054-1.572-2.066L9.886 9.99H7.612l-2.787 2.23.938-2.23H2.44L0 15.735Z"
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
export class SvgKtmIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
