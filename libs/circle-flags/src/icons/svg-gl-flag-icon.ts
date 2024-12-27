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
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#d80027" d="m0 256 259-45.3L512 256v256H0z" />
        <path fill="#eee" d="M0 0h512v256H0z" />
        <path fill="#eee" d="M55.7 256a122.4 122.4 0 1 0 244.8 0l-123-24z" />
        <path fill="#d80027" d="M55.7 256a122.4 122.4 0 1 1 244.8 0z" />
      </g>
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
