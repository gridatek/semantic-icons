import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siKarakeepIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Karakeep</svg:title>
    <svg:path
      d="M22.582.054H1.418C.635.054 0 .69 0 1.472v21.056c0 .783.635 1.418 1.418 1.418h21.164c.783 0 1.418-.635 1.418-1.418V1.472C24 .69 23.365.054 22.582.054M10.487 20.437a.37.37 0 0 1-.37.37H3.592a.37.37 0 0 1-.37-.37V3.485a.37.37 0 0 1 .37-.37h6.422a.37.37 0 0 1 .37.37v6.452s-.035 2.776.103 4.955zm10.188 0a.371.371 0 0 1-.575.31l-2.975-1.945a.37.37 0 0 0-.42.01l-2.608 1.887a.36.36 0 0 1-.345.042.37.37 0 0 1-.159-.302V7.274c.353-.07.746-.106 1.2-.106 2.229 0 5.882 1.257 5.882 4.81z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#000000',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKarakeepIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Karakeep icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
