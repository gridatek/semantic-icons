import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-inner-shadow-bottom-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-inner-shadow-bottom"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M5.144 4.72c3.92 -3.695 10.093 -3.625 13.927 .209c3.905 3.905 3.905 10.237 0 14.142c-3.905 3.905 -10.237 3.905 -14.142 0c-3.905 -3.905 -3.905 -10.237 0 -14.142zm3.32 10.816a1 1 0 1 0 -1.414 1.414a7 7 0 0 0 9.9 0a1 1 0 0 0 -1.414 -1.414a5 5 0 0 1 -7.072 0z"
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
export class SvgInnerShadowBottomIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
