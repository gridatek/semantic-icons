import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-spray-can-icon',
  standalone: true,
  imports: [],
  template: `
    <!-- @license lucide-static v0.469.0 - ISC -->
    <svg
      class="lucide lucide-spray-can"
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
      <path d="M3 3h.01" />
      <path d="M7 5h.01" />
      <path d="M11 7h.01" />
      <path d="M3 7h.01" />
      <path d="M7 9h.01" />
      <path d="M3 11h.01" />
      <rect width="4" height="4" x="15" y="5" />
      <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
      <path d="m13 14 8-2" />
      <path d="m13 19 8-2" />
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
export class SvgSprayCanIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
