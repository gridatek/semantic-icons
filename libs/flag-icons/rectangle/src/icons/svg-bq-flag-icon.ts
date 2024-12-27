import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bq-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bq"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#21468b" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 0h640v320H0z" />
      <path fill="#ae1c28" d="M0 0h640v160H0z" />
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
export class SvgBqFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
