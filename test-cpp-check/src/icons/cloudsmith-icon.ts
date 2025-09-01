import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cloudsmith-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Cloudsmith</svg:title>
    <svg:path
      d="M24 10.667v2.667L13.333 24h-2.666L0 13.334v-2.667L10.667 0h2.666L24 10.667Zm-12 6.869a5.535 5.535 0 1 0 0-11.07 5.535 5.535 0 0 0 0 11.07Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Cloudsmith icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#2A6FE1',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCloudsmithIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#2A6FE1');
}
