import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gb-eng-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-gb-eng"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="#ce1124" d="M215 0h82v512h-82z" />
      <path fill="#ce1124" d="M0 215h512v82H0z" />
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
export class SvgGbEngFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
