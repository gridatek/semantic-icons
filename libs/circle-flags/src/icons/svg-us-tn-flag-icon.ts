import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-us-tn-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#0052b4" d="M448 0h64v512h-64l-16-256Z" />
        <path fill="#eee" d="M416 0h32v512h-32l-16-256Z" />
        <path fill="#d80027" d="M0 0h416v512H0z" />
        <circle cx="208" cy="256" r="160" fill="#eee" />
        <circle cx="208" cy="256" r="128" fill="#0052b4" />
        <path
          fill="#eee"
          d="m145 284 60 83V265l-60 83 98-32zm15-128-22 100 76-68-102 11 89 51zm147 49-42 93-21-100 75 69-102-11z"
        />
      </g>
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
export class SvgUsTnFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
