import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-rakuten-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Rakuten</title>
      <path
        d="M23.277 21.3L3.939 24 .722 21.3h22.555zM7.6 19.276H3.939V0h6.052a6.653 6.653 0 0 1 6.65 6.646c0 2.234-1.108 4.204-2.799 5.418l5.418 7.211h-4.585l-4.486-5.979H7.6v5.98zm0-9.64h2.392a2.992 2.992 0 0 0 2.989-2.989 2.994 2.994 0 0 0-2.989-2.986H7.6v5.975z"
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
export class SvgRakutenIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
