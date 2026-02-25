import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siLIcon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M224 96C241.7 96 256 110.3 256 128L256 480L448 480C465.7 480 480 494.3 480 512C480 529.7 465.7 544 448 544L224 544C206.3 544 192 529.7 192 512L192 128C192 110.3 206.3 96 224 96z"
    />
  `,
  host: {
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 640 640');

  readonly fill = input<string>('currentColor');
}
