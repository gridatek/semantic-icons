import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siOrchardCoreIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Orchard Core</svg:title>
    <svg:path
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.629 0 12 0m0 21.69c-5.352 0-9.692-4.338-9.692-9.692 0-5.352 4.338-9.691 9.692-9.691 5.352 0 9.692 4.338 9.692 9.691A9.69 9.69 0 0 1 12 21.69m5.778-3.964a7.996 7.996 0 0 1 0-11.305 7.993 7.993 0 0 1 0 11.305m-3.212-3.211A7.994 7.994 0 0 1 6.572 6.52a7.996 7.996 0 0 1 7.994 7.994m-8.13 3.242a7.996 7.996 0 0 1 11.306 0 7.996 7.996 0 0 1-11.305 0"
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
    'data-brand-color': '#41B670',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiOrchardCoreIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Orchard Core icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#41B670');
}
