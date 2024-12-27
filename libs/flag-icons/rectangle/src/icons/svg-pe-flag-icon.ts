import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pe-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-pe"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#D91023" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
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
export class SvgPeFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
