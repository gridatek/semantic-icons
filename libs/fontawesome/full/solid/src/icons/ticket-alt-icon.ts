import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siTicketAltIcon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M32 192C32 156.7 60.7 128 96 128L544 128C579.3 128 608 156.7 608 192L608 256C608 264.8 600.6 271.7 592.3 274.6C573.5 281.1 560 299 560 320C560 341 573.5 358.9 592.3 365.4C600.6 368.3 608 375.2 608 384L608 448C608 483.3 579.3 512 544 512L96 512C60.7 512 32 483.3 32 448L32 384C32 375.2 39.4 368.3 47.7 365.4C66.5 358.9 80 341 80 320C80 299 66.5 281.1 47.7 274.6C39.4 271.7 32 264.8 32 256L32 192z"
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
export class SiTicketAltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 640 640');

  readonly fill = input<string>('currentColor');
}
