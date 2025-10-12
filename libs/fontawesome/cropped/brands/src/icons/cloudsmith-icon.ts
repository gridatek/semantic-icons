import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cloudsmith-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M512 227.6L512 284.5 284.4 512 227.6 512 0 284.4 0 227.6 227.6 0 284.5 0 512 227.6zm-256 162c17.8 .5 35.6-2.6 52.2-9.1s31.8-16.2 44.6-28.7 23-27.3 29.9-43.8 10.5-34.1 10.5-52-3.6-35.5-10.5-52-17.1-31.3-29.9-43.8-28-22.2-44.6-28.7-34.4-9.6-52.2-9.1c-17.8-.5-35.6 2.6-52.2 9.1s-31.8 16.3-44.6 28.7-23 27.3-29.9 43.8-10.5 34.1-10.5 52 3.6 35.5 10.5 52 17.1 31.3 29.9 43.8 28 22.2 44.6 28.7 34.4 9.6 52.2 9.1z"
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
export class SiCloudsmithIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');

  readonly fill = input<string>('currentColor');
}
