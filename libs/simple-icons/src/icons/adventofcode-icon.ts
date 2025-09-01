import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-adventofcode-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Advent Of Code</svg:title>
    <svg:path
      d="m14.05 13.236 6.498 9.606L18.91 24l-6.905-9.47L5.1 24l-1.637-1.158 6.498-9.606L.553 9.22l.615-1.69 9.596 3.463L11.087 0h1.826l.323 10.993 9.596-3.462.615 1.69-9.387 4.015z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Advent Of Code icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#FFFF66',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAdventofcodeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FFFF66');
}
