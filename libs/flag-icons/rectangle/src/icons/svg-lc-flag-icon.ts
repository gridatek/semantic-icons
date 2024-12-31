import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lc-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-lc"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="#65cfff" d="M0 0h640v480H0z" />
        <path fill="#fff" d="m318.9 42 162.7 395.3-322.6.9z" />
        <path fill="#000001" d="m319 96.5 140.8 340-279 .8z" />
        <path fill="#ffce00" d="m318.9 240.1 162.7 197.6-322.6.5z" />
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
export class SvgLcFlagIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
