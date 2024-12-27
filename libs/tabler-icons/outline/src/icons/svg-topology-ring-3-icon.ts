import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-topology-ring-3-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-topology-ring-3"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M6 8v8" />
      <path d="M18 16v-8" />
      <path d="M8 6h8" />
      <path d="M16 18h-8" />
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
export class SvgTopologyRing3Icon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
