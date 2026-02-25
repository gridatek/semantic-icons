import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siCoolifyIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Coolify</svg:title>
    <svg:path
      d="M4.364 4.364V0h17.454v4.364zm0 13.09H0V4.365h4.364zm0 0h17.454v4.364H4.364ZM6.545 6.546v-1.7H22.3V2.182H24v4.363zm0 0v10.4h-1.7v-10.4ZM3.882 17.936v1.7h-1.7v-1.7ZM24 24H6.545v-1.7H22.3v-2.664H24Z"
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
    'data-brand-color': '#6B16ED',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCoolifyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Coolify icon');
  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#6B16ED');
}
