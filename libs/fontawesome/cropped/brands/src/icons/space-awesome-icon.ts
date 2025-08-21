import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-space-awesome-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M96 256l32 0 0 256-128 0 0-160 32 0 0-32 32 0 0-32 32 0 0-32zm416 96l0 160-128 0 0-256 32 0 0 32 32 0 0 32 32 0 0 32 32 0zM320 64l32 0 0 384-32 0 0-32-128 0 0 32-32 0 0-384 32 0 0-32 32 0 0-32 64 0 0 32 32 0 0 32zm-32 64l-64 0 0 64 64 0 0-64z"
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

  readonly viewBox = input<string>('0 0 512 512');

  readonly fill = input<string>('currentColor');
}
