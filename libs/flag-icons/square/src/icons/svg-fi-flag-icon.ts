import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fi-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-fi"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="#002f6c" d="M0 186.2h512v139.6H0z" />
      <path fill="#002f6c" d="M123.2 0h139.6v512H123.1z" />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFiFlagIcon {
  readonly class = input<string>('');
}
