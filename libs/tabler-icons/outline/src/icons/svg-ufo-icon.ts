import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ufo-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-ufo"
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
      <path
        d="M16.95 9.01c3.02 .739 5.05 2.123 5.05 3.714c0 2.367 -4.48 4.276 -10 4.276s-10 -1.909 -10 -4.276c0 -1.59 2.04 -2.985 5.07 -3.724"
      />
      <path
        d="M7 9c0 1.105 2.239 2 5 2s5 -.895 5 -2v-.035c0 -2.742 -2.239 -4.965 -5 -4.965s-5 2.223 -5 4.965v.035"
      />
      <path d="M15 17l2 3" />
      <path d="M8.5 17l-1.5 3" />
      <path d="M12 14h.01" />
      <path d="M7 13h.01" />
      <path d="M17 13h.01" />
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
export class SvgUfoIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
