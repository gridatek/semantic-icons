import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-peseta-sign-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M208 96C190.3 96 176 110.3 176 128L176 232L152 232C138.7 232 128 242.7 128 256C128 269.3 138.7 280 152 280L176 280L176 512C176 529.7 190.3 544 208 544C225.7 544 240 529.7 240 512L240 416L336 416C416.2 416 482.6 357 494.2 280L520 280C533.3 280 544 269.3 544 256C544 242.7 533.3 232 520 232L494.2 232C482.6 155 416.2 96 336 96L208 96zM429 232L240 232L240 160L336 160C380.7 160 418.3 190.6 429 232zM240 280L429 280C418.3 321.4 380.8 352 336 352L240 352L240 280z"
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
export class SiPesetaSignIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 640');

  readonly fill = input<string>('currentColor');
}
