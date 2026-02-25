import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siMoundIcon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M112.4 179.2C142 127.7 196.8 96 256.2 96s114.2 31.7 143.9 83.2L508.7 368c12.3 21.3-3.1 48-27.7 48L31.5 416c-24.6 0-40-26.6-27.7-48L112.4 179.2z"
    />
  `,
  host: {
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMoundIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 512 512');

  readonly fill = input<string>('currentColor');
}
