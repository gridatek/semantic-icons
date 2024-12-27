import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-engadget-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Engadget</title>
      <path
        d="M0 20.067a3.9 3.9 0 0 0 4 3.866h16v-4H4v-4h15.733A4.231 4.231 0 0 0 24 12.067V4.333A4.483 4.483 0 0 0 19.733.067H4a4.346 4.346 0 0 0-4 4.266Zm20-8.134H4v-8h16Z"
      />
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
export class SvgEngadgetIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
