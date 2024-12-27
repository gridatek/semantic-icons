import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gh-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-gh"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#006b3f" d="M0 0h640v480H0z" />
      <path fill="#fcd116" d="M0 0h640v320H0z" />
      <path fill="#ce1126" d="M0 0h640v160H0z" />
      <path fill="#000001" d="m320 160 52 160-136.1-98.9H404L268 320z" />
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
export class SvgGhFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
