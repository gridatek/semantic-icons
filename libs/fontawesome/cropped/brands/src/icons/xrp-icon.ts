import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siXrpIcon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M157.1 313.5c54.7-54.1 143.4-54.2 198.2 0l152.1 150.5-72.7 0-115.8-114.6c-34.7-34.3-90.8-34.3-125.5 0L77.7 464 5 464 157.1 313.5zm36.3-151.8c34.7 34.3 90.8 34.3 125.5 0L433.8 48 506.4 48 355.2 197.6c-54.7 54.1-143.4 54.1-198.1 0L5.9 48 78.6 48 193.4 161.7z"
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
export class SiXrpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 512 512');

  readonly fill = input<string>('currentColor');
}
