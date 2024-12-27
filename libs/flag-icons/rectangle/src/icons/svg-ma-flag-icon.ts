import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ma-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-ma"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#c1272d" d="M640 0H0v480h640z" />
      <path
        fill="none"
        stroke="#006233"
        stroke-width="11.7"
        d="M320 179.4 284.4 289l93.2-67.6H262.4l93.2 67.6z"
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
export class SvgMaFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
