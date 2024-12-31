import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ro-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-ro"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#00319c" d="M0 0h170.7v512H0z" />
        <path fill="#ffde00" d="M170.7 0h170.6v512H170.7z" />
        <path fill="#de2110" d="M341.3 0H512v512H341.3z" />
      </g>
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
export class SvgRoFlagIcon {
  readonly class = input<string>('');
}
