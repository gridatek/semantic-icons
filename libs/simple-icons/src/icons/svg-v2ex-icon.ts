import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-v2ex-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>V2EX</title>
      <path
        d="M.671 1.933h13.821a1.342 1.342 0 0 1 .98.425l8.166 8.725a1.342 1.342 0 0 1 0 1.834l-8.166 8.724a1.342 1.342 0 0 1-.98.426H.673A.671.671 0 0 1 0 21.395v-6.878h13.19l2.276-2.28a.336.336 0 0 0 0-.474l-2.276-2.28H0V2.604a.671.671 0 0 1 .671-.671Z"
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
export class SvgV2exIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
