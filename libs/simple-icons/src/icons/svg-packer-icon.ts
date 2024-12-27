import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-packer-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Packer</title>
      <path
        d="M7.844 0v3.38l5.75 3.32v10.148l2.705 1.552c1.676.967 3.045.388 3.045-1.285V9.668c-.014-1.687-1.382-3.832-3.059-4.799L7.844 0zM4.656 2.932v16.574L12.436 24V7.426l-7.78-4.494Z"
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
export class SvgPackerIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
