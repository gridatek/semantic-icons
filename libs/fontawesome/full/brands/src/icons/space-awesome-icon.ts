import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siSpaceAwesomeIcon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M160 320L192 320L192 576L64 576L64 416L96 416L96 384L128 384L128 352L160 352L160 320zM576 416L576 576L448 576L448 320L480 320L480 352L512 352L512 384L544 384L544 416L576 416zM384 128L416 128L416 512L384 512L384 480L256 480L256 512L224 512L224 128L256 128L256 96L288 96L288 64L352 64L352 96L384 96L384 128zM352 192L288 192L288 256L352 256L352 192z"
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
export class SiSpaceAwesomeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 640');

  readonly fill = input<string>('currentColor');
}
