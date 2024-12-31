import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-drone-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-drone"
      [class]="classInput()"
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
      <path d="M10 10h4v4h-4z" />
      <path d="M10 10l-3.5 -3.5" />
      <path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" />
      <path d="M14 10l3.5 -3.5" />
      <path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" />
      <path d="M14 14l3.5 3.5" />
      <path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" />
      <path d="M10 14l-3.5 3.5" />
      <path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" />
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
export class SvgDroneIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
