import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gl-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-gl"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path
        fill="#d00c33"
        d="M0 256h512v256H0zm53.3 0a170.7 170.7 0 1 0 341.4 0 170.7 170.7 0 0 0-341.4 0"
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
export class SvgGlFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
