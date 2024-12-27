import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sr-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-sr"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#377e3f" d="M.1 0h640v480H.1z" />
      <path fill="#fff" d="M.1 96h640v288H.1z" />
      <path fill="#b40a2d" d="M.1 144h640v192H.1z" />
      <path
        fill="#ecc81d"
        d="m320 153.2 56.4 173.6-147.7-107.3h182.6L263.6 326.8z"
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
export class SvgSrFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
