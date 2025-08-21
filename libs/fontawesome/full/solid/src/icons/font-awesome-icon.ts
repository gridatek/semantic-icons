import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-font-awesome-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M155.7 160C170.3 150.8 180 134.5 180 116C180 87.3 156.7 64 128 64C99.3 64 76 87.3 76 116C76 132.7 83.8 147.5 96 157L96 576L160 576L160 512L533.6 512C548.2 512 560 500.2 560 485.6C560 481.9 559.2 478.3 557.7 474.9L496 336L557.7 197.1C559.2 193.7 560 190.1 560 186.4C560 171.8 548.2 160 533.6 160L155.7 160z"
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
export class SiFontAwesomeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 640');

  readonly fill = input<string>('currentColor');
}
