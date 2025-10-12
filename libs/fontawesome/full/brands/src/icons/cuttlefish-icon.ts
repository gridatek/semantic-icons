import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cuttlefish-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M444 369.5C426.5 401.1 386.6 424 348 424C291.4 424 244 376.6 244 320C244 263.4 291.4 216 348 216C386.6 216 426.5 238.9 444 270.5C457.7 219.6 485.7 177.2 531 152.7C485.7 103.1 420.5 72 348 72C211 72 100 183 100 320C100 457 211 568 348 568C420.5 568 485.7 536.9 531 487.3C485.7 462.8 457.7 420.4 444 369.5z"
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
export class SiCuttlefishIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 640');

  readonly fill = input<string>('currentColor');
}
