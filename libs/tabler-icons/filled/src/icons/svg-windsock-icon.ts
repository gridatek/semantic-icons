import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-windsock-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-windsock"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M6 2a1 1 0 0 1 1 1v1.079l11.083 .924a1 1 0 0 1 .917 .997v4a1 1 0 0 1 -.917 .997l-11.083 .923v8.08h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0 -2h1v-17a1 1 0 0 1 1 -1m1 4.086v3.827l3 -.25v-3.327zm7 .584v2.659l3 -.25v-2.159z"
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
export class SvgWindsockIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
