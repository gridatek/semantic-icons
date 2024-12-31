import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-dialpad-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-dialpad-off"
      [class]="class()"
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
      <path d="M7 7h-4v-4" />
      <path d="M17 3h4v4h-4z" />
      <path d="M10 6v-3h4v4h-3" />
      <path d="M3 10h4v4h-4z" />
      <path d="M17 13v-3h4v4h-3" />
      <path d="M14 14h-4v-4" />
      <path d="M10 17h4v4h-4z" />
      <path d="M3 3l18 18" />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDialpadOffIcon {
  readonly class = input<string>('');
}
