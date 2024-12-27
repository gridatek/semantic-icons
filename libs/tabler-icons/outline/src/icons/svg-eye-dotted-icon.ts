import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-eye-dotted-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-eye-dotted"
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
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M21 12h.01" />
      <path d="M3 12h.01" />
      <path d="M5 15h.01" />
      <path d="M5 9h.01" />
      <path d="M19 15h.01" />
      <path d="M12 18h.01" />
      <path d="M12 6h.01" />
      <path d="M8 17h.01" />
      <path d="M8 7h.01" />
      <path d="M16 17h.01" />
      <path d="M16 7h.01" />
      <path d="M19 9h.01" />
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
export class SvgEyeDottedIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
