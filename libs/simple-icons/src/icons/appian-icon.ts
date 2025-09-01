import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-appian-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Appian</svg:title>
    <svg:path
      d="M19.646 6.117C19.538 1.763 17.883 0 13.636 0H7.34v4.066h4.57c1.799 0 2.807 0 2.807 1.655v2.375c-.828 0-2.88-.036-4.426-.036-4.246 0-5.83 1.727-5.937 6.117v3.742c.108 4.102 1.51 5.865 5.253 6.081l3.85-4.066c-.397.036-.864.036-1.44.036-1.798 0-2.806 0-2.806-1.655v-4.57c0-1.655 1.007-1.655 2.806-1.655 1.908 0 2.807 0 2.807 1.655v10.22h4.821z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Appian icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#2322F0',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAppianIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#2322F0');
}
