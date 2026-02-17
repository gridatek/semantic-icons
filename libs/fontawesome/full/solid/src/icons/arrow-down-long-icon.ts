import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siArrowDownLongIcon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M297.4 598.6C309.9 611.1 330.2 611.1 342.7 598.6L470.7 470.6C483.2 458.1 483.2 437.8 470.7 425.3C458.2 412.8 437.9 412.8 425.4 425.3L352 498.7L352 64C352 46.3 337.7 32 320 32C302.3 32 288 46.3 288 64L288 498.7L214.6 425.3C202.1 412.8 181.8 412.8 169.3 425.3C156.8 437.8 156.8 458.1 169.3 470.6L297.3 598.6z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiArrowDownLongIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 640');

  readonly fill = input<string>('currentColor');
}
