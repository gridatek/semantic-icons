import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bounce-right-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-bounce-right"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M14.143 11.486a1 1 0 0 1 1.714 1.028c-1.502 2.505 -2.41 4.89 -2.87 7.65c-.16 .956 -1.448 1.15 -1.881 .283c-2.06 -4.12 -3.858 -4.976 -6.79 -3.998a1 1 0 1 1 -.632 -1.898c3.2 -1.067 5.656 -.373 7.803 2.623l.091 .13l.011 -.04c.522 -1.828 1.267 -3.55 2.273 -5.3l.28 -.478z"
      />
      <path d="M18 4a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
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
export class SvgBounceRightIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
