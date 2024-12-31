import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-currency-won-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-currency-won"
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
      <path
        d="M4 6l3.245 11.358a.85 .85 0 0 0 1.624 .035l3.131 -9.393l3.131 9.393a.85 .85 0 0 0 1.624 -.035l3.245 -11.358"
      />
      <path d="M21 10h-18" />
      <path d="M21 14h-18" />
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
export class SvgCurrencyWonIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
