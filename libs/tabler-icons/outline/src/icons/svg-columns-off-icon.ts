import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-columns-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-columns-off"
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
      <path d="M4 6h2" />
      <path d="M4 10h5.5" />
      <path d="M4 14h5.5" />
      <path d="M4 18h5.5" />
      <path d="M14.5 6h5.5" />
      <path d="M14.5 10h5.5" />
      <path d="M18 14h2" />
      <path d="M14.5 18h3.5" />
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
export class SvgColumnsOffIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
