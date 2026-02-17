import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siEthernetIcon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M0 224L0 416c0 17.7 14.3 32 32 32l32 0 0-104c0-13.3 10.7-24 24-24s24 10.7 24 24l0 104 64 0 0-104c0-13.3 10.7-24 24-24s24 10.7 24 24l0 104 64 0 0-104c0-13.3 10.7-24 24-24s24 10.7 24 24l0 104 64 0 0-104c0-13.3 10.7-24 24-24s24 10.7 24 24l0 104 32 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-32 0 0-32c0-17.7-14.3-32-32-32l-32 0 0-32c0-17.7-14.3-32-32-32L160 64c-17.7 0-32 14.3-32 32l0 32-32 0c-17.7 0-32 14.3-32 32l0 32-32 0c-17.7 0-32 14.3-32 32z"
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
export class SiEthernetIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');

  readonly fill = input<string>('currentColor');
}
