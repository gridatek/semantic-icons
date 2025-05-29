import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-bone-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="2"
      d="M16.8879 7.11205c.1788-.77492-.1192-1.66905-.7153-2.26515-1.0133-1.01335-2.5632-1.01335-3.5765 0-1.0134 1.01336-1.0134 2.5632 0 3.57655L8.42342 12.5961c-1.01336-1.0134-2.5632-1.0134-3.57655 0-1.01336 1.0133-1.01336 2.5632 0 3.5765.59609.5961 1.49023.8942 2.26515.7154-.17883.7749.11921 1.669.71531 2.2651 1.01335 1.0134 2.56317 1.0134 3.57657 0 1.0133-1.0134 1.0133-2.5632 0-3.5765l4.1726-4.1727c1.0134 1.0134 2.5632 1.0134 3.5766 0 1.0133-1.0133 1.0133-2.56318 0-3.57654-.5961-.59609-1.4903-.89414-2.2652-.71531Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBoneIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
