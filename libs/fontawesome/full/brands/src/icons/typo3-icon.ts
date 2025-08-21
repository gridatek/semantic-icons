import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-typo3-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M274.7 142.4C274.7 117.7 280.1 110 288.6 103C219.1 111.5 139.3 137 112.3 169.4C106.9 177.1 103 190.2 103 206.5C103 310 209.8 544 287.1 544C323.4 544 384.4 484.5 433.8 405C426.8 407.3 422.2 407.3 415.3 407.3C358.1 407.3 274.7 208.8 274.7 142.4zM397.5 96C367.4 96 355.8 101.4 355.8 132.3C355.8 198.7 409.6 330.8 457.5 330.8C483.8 330.8 536.3 231.1 536.3 148.5C536.3 107.6 469.3 96 397.5 96z"
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
export class SiTypo3Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 640');

  readonly fill = input<string>('currentColor');
}
