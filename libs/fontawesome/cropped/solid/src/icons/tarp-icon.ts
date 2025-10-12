import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tarp-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M448 64c35.3 0 64 28.7 64 64l0 149.5c0 17-6.7 33.3-18.7 45.3L386.7 429.3c-12 12-28.3 18.7-45.3 18.7L64 448c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l384 0zm5.5 208L360 272c-13.3 0-24 10.7-24 24l0 93.5 117.5-117.5zM96 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
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
export class SiTarpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');

  readonly fill = input<string>('currentColor');
}
