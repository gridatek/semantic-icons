import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-peace-fill-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-peace-fill"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M14 13.292A8 8 0 0 0 8.5.015v7.778zm-.708.708L8.5 9.206v6.778a7.97 7.97 0 0 0 4.792-1.986zM7.5 15.985V9.207L2.708 14A7.97 7.97 0 0 0 7.5 15.985M2 13.292A8 8 0 0 1 7.5.015v7.778z"
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
export class SvgPeaceFillIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
