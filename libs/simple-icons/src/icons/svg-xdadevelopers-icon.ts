import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-xdadevelopers-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>XDA Developers</title>
      <path
        d="M13.84 3.052V0h7.843v17.583H13.84v-3.024h4.591V3.052zM5.569 14.53V3.024h4.592V0H2.318v17.583H6.98L10.16 24v-9.483z"
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
export class SvgXdadevelopersIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
