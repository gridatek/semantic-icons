import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gn-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-gn"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="red" d="M0 0h170.7v512H0z" />
        <path fill="#ff0" d="M170.7 0h170.6v512H170.7z" />
        <path fill="#090" d="M341.3 0H512v512H341.3z" />
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
export class SvgGnFlagIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
