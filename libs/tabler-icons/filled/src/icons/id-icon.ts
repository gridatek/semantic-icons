import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siIdIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-10q 0 -.053 .005 -.102a3.994 3.994 0 0 1 3.995 -3.898zm-1 12h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 0 -2m-8 -8a2.995 2.995 0 0 0 -2.995 2.898a1 1 0 0 0 -.005 .102a3 3 0 1 0 3 -3m8 4h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0 -2m0 -4h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0 -2"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIdIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
