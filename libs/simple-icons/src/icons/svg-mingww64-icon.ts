import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mingww64-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>MinGW-w64</title>
      <path
        d="m -3e-4,9.3955 4.187,-4.187 4.1869,4.187 -4.187,4.187 z m 0,10.417 4.187,-4.1869 4.1869,4.187 -4.187,4.1869 z m 5.2086,-5.2085 4.1869,-4.187 4.187,4.187 -4.187,4.187 z m 0,-10.417 L 9.3953,0 13.5822,4.187 9.3952,8.3738 Z m 5.2085,5.2084 4.187,-4.1869 4.1869,4.187 -4.187,4.1869 z M 15.6253,4.187 19.8123,0 l 4.1869,4.187 -4.187,4.1869 z m -5.208,15.626 4.187,-4.1869 4.1869,4.187 L 14.6042,24 Z m 5.2086,-5.2085 4.187,-4.187 4.1868,4.187 -4.1869,4.187 z"
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
export class SvgMingww64Icon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
