import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mixcloud-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Mixcloud</svg:title>
    <svg:path
      d="M2.462 8.596l1.372 6.49h.319l1.372-6.49h2.462v6.808H6.742v-5.68l.232-.81h-.402l-1.43 6.49H2.854l-1.44-6.49h-.391l.222.81v5.68H0V8.596zM24 8.63v1.429L21.257 12 24 13.941v1.43l-3.235-2.329h-.348l-3.226 2.329v-1.43l2.734-1.94-2.733-1.942V8.63l3.225 2.338h.348zm-7.869 2.75v1.24H9.304v-1.24z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Mixcloud icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#5000FF',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMixcloudIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#5000FF');
}
