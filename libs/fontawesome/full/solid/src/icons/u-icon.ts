import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-u-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M160 96C177.7 96 192 110.3 192 128L192 352C192 422.7 249.3 480 320 480C390.7 480 448 422.7 448 352L448 128C448 110.3 462.3 96 480 96C497.7 96 512 110.3 512 128L512 352C512 458 426 544 320 544C214 544 128 458 128 352L128 128C128 110.3 142.3 96 160 96z"
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
export class SiUIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 640');

  readonly fill = input<string>('currentColor');
}
