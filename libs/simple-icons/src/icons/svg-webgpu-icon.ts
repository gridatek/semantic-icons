import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-webgpu-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>WebGPU</title>
      <path
        d="m0 4.784 8.652 14.432 8.652-14.432zm22.032.145L20.07 8.202H24L22.032 4.93zm-4.46 0-4.192 6.993h8.384zm2.498 3.575 1.962 3.273L24 8.504zm-6.69 3.72 4.192 6.992 4.192-6.992z"
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
export class SvgWebgpuIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
