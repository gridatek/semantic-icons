import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-innosoft-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M320 96l0 320c21 0 41.8-4.1 61.2-12.2s37-19.8 51.9-34.7 26.6-32.5 34.7-51.9 12.2-40.2 12.2-61.2-4.1-41.8-12.2-61.2-19.8-37.1-34.7-51.9-32.5-26.6-51.9-34.7-40.2-12.2-61.2-12.2zM0 256L160 416 320 256 160 96 0 256zm480 0c0 21 4.1 41.8 12.2 61.2s19.8 37 34.7 51.9 32.5 26.6 51.9 34.7 40.2 12.2 61.2 12.2l0-320c-42.4 0-83.1 16.9-113.1 46.9S480 213.6 480 256z"
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
export class SiInnosoftIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 512');

  readonly fill = input<string>('currentColor');
}
