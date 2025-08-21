import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-dropbox-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M288.4 116.3l-132 84.3 132 84.3-132 84.3-132.4-85.1 132.3-84.3-132.3-83.5 132.3-84.3 132.1 84.3zM155.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zM288.4 284.1l132-84.3-132-83.6 131.3-84.2 132.3 84.3-132.3 84.3 132.3 84.2-132.3 84.3-131.3-85z"
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
export class SiDropboxIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 576 512');

  readonly fill = input<string>('currentColor');
}
