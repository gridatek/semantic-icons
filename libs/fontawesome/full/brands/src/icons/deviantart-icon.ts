import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-deviantart-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M480 157.2L381.8 336.3L389.2 345.8L480 345.8L480 473.5L319.1 473.5L305.6 482.7L261.9 566.7C261.6 566.7 253.3 575.3 252.7 575.9L160 575.9L160 482.7L253.2 303.3L245.8 294.1L160 294.1L160 166.5L316 166.5L329.5 157.3L373.2 73.3C373.5 73.3 381.8 64.7 382.4 64.1L480 64.1L480 157.2z"
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
export class SiDeviantartIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 640');

  readonly fill = input<string>('currentColor');
}
