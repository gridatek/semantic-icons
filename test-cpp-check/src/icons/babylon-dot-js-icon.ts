import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-babylon-dot-js-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Babylon.js</svg:title>
    <svg:path
      d="M12 0 1.607 6.002v12L12 24l10.393-6V6L19.14 4.123 16.01 5.93l3.252 1.879v8.384L12 20.387l-7.264-4.194V7.807l10.393-6zm0 8.244-3.254 1.879v3.754h.002v.004L12 15.758l3.252-1.877v-3.76z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Babylon.js icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#BB464B',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBabylonDotJsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#BB464B');
}
