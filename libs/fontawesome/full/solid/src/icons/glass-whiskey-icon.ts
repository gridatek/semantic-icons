import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-glass-whiskey-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. -->
    <svg:path
      fill="currentColor"
      d="M128 96C110.3 96 96 110.3 96 128L96 416C96 486.7 153.3 544 224 544L416 544C486.7 544 544 486.7 544 416L544 128C544 110.3 529.7 96 512 96L128 96zM160 320L160 160L480 160L480 320L160 320z"
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
export class SiGlassWhiskeyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 640');

  readonly fill = input<string>('currentColor');
}
