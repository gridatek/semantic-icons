import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siDolibarrIcon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M167.6 160.2l0 319.5-119.4-1.3 0-446.4 155.6 0c68.2 0 121.7 17.2 160.3 51.7 45.9 41.2 68.8 97.1 68.8 167.8 0 67.6-19.6 122.7-58.8 165.5S285.3 480 223.6 480c-7.3 0-20.3-.2-36.6-.3l0-131.1 32.9-.2c69.6-.4 90.6-32.2 90.6-97 0-60.8-34.2-91.2-102.6-91.2l-40.3 0z"
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
export class SiDolibarrIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 448 512');

  readonly fill = input<string>('currentColor');
}
