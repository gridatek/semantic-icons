import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bg-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bg"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#fff" d="M0 0h640v160H0z" />
      <path fill="#00966e" d="M0 160h640v160H0z" />
      <path fill="#d62612" d="M0 320h640v160H0z" />
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
export class SvgBgFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
