import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-basket-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-basket"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M15.949 3.684l1.104 3.316h1.947a3 3 0 0 1 2.962 3.477l-1.252 7.131a4 4 0 0 1 -3.954 3.392h-9.512a3.994 3.994 0 0 1 -3.95 -3.371l-1.258 -7.173a3 3 0 0 1 2.964 -3.456h1.945l1.105 -3.316a1 1 0 0 1 1.898 .632l-.895 2.684h5.893l-.895 -2.684a1 1 0 1 1 1.898 -.632m-3.949 7.316a3 3 0 0 0 -2.995 2.824l-.005 .176a3 3 0 1 0 3 -3"
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
export class SvgBasketIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
