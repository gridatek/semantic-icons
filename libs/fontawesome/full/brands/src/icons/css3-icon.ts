import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siCss3Icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M544 96L480 464L256.7 544L64 464L83.6 369.2L165.6 369.2L157.6 409.8L274 454.2L408.1 409.8L426.9 312.7L93.5 312.7L109.5 230.7L443.2 230.7L453.7 178L120.3 178L136.6 96L544 96z"
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
export class SiCss3Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 640 640');

  readonly fill = input<string>('currentColor');
}
