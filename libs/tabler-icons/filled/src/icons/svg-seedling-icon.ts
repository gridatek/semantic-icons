import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-seedling-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-seedling"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M6 3a7 7 0 0 1 6.95 6.155a6.97 6.97 0 0 1 5.05 -2.155h3a1 1 0 0 1 1 1v1a7 7 0 0 1 -7 7h-2v4a1 1 0 0 1 -2 0v-7h-2a7 7 0 0 1 -7 -7v-2a1 1 0 0 1 1 -1z"
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
export class SvgSeedlingIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
