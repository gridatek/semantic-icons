import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-battery-0-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M112 160c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16l416 0c8.8 0 16-7.2 16-16l0-224c0-8.8-7.2-16-16-16l-416 0zM32 176c0-44.2 35.8-80 80-80l416 0c44.2 0 80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 48c0 44.2-35.8 80-80 80l-416 0c-44.2 0-80-35.8-80-80l0-224z"
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
export class SiBattery0Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 512');

  readonly fill = input<string>('currentColor');
}
