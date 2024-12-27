import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-se-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-se"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#005293" d="M0 0h512v512H0z" />
      <path
        fill="#fecb00"
        d="M134 0v204.8H0v102.4h134V512h102.4V307.2H512V204.8H236.4V0z"
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
export class SvgSeFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
