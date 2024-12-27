import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sy-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-sy"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#000001" d="M0 0h512v512H0Z" />
      <path fill="#fff" d="M0 0h512v341.3H0Z" />
      <path fill="#ce1126" d="M0 0h512v170.7H0Z" />
      <path
        fill="#007a3d"
        d="M86.4 320 128 192l41.6 128-108.9-79.1h134.6M342.4 320 384 192l41.6 128-108.9-79.1h134.6"
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
export class SvgSyFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
