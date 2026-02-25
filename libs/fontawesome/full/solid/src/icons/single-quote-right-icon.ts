import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siSingleQuoteRightIcon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M288 480C270.3 480 256 465.7 256 448C256 430.3 270.3 416 288 416L296 416C326.9 416 352 390.9 352 360L352 352L288 352C252.7 352 224 323.3 224 288L224 224C224 188.7 252.7 160 288 160L352 160C387.3 160 416 188.7 416 224L416 360C416 426.3 362.3 480 296 480L288 480z"
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
export class SiSingleQuoteRightIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 640 640');

  readonly fill = input<string>('currentColor');
}
