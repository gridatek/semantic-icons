import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-brand-denodo-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-denodo"
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
      <path d="M11 11h2v2h-2z" />
      <path d="M3.634 15.634l1.732 -1l1 1.732l-1.732 1z" />
      <path d="M11 19h2v2h-2z" />
      <path d="M18.634 14.634l1.732 1l-1 1.732l-1.732 -1z" />
      <path d="M17.634 7.634l1.732 -1l1 1.732l-1.732 1z" />
      <path d="M11 3h2v2h-2z" />
      <path d="M3.634 8.366l1 -1.732l1.732 1l-1 1.732z" />
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
export class SvgBrandDenodoIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
