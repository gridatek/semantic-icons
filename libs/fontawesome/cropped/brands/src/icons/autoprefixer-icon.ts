import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-autoprefixer-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M318.4 16l-161 480 77.5 0 25.4-81.4 119.5 0 25.2 81.4 77.5 0-164.1-480zM278.1 357.9l41.2-130.4 1.5 0 40.9 130.4-83.6 0zM640 405L630 373.6 462.1 358 481.5 414.5 640 405zM177.9 358L10 373.7 0 405 158.5 414.4 177.9 358z"
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
export class SiAutoprefixerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 512');

  readonly fill = input<string>('currentColor');
}
