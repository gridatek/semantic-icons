import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-triller-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Triller</svg:title>
    <svg:path
      d="M15.548 5.216L7.005 20.012l-.29-.167 8.54-14.788a9.365 9.365 0 0 0-6.07-.906L2.73 15.333l-.609 1.055a9.34 9.34 0 0 0 3.818 4.806l-1.522 2.64.289.166 2.303-3.987h-.002a9.367 9.367 0 0 0 6.068.905l6.321-10.945.287.167-6.168 10.683-.964 1.67a9.322 9.322 0 0 0 7.55-7.555 9.267 9.267 0 0 0-.413-4.802l2.299-3.982-.29-.167L20.14 8.68a9.343 9.343 0 0 0-3.816-4.806zm-5.842-2.64a9.324 9.324 0 0 0-7.132 12.359L8.893 3.989l.292.162L11.483.167 11.193 0z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Triller icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#FF0089',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTrillerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FF0089');
}
