import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-brand-picsart-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-picsart"
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
      <path d="M12 9m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M12 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M5 9v11a2 2 0 1 0 4 0v-4.5" />
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
export class SvgBrandPicsartIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
