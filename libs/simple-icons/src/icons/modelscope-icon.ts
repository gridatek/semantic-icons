import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-modelscope-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>ModelScope</svg:title>
    <svg:path
      d="M2.667 5.333V8H0v5.333h2.667v-2.666H.5V8.5h2.166v2.166h2.666V8H8V5.333Zm0 8v5.334H8V16H5.333v-2.667Zm13.333-8V8h2.667v2.667h2.666V8.5H23.5v2.166h-2.166v2.666H24V8h-2.667V5.333Zm5.333 8h-2.666V16H16v2.667h5.333zM8 10.667v2.666h2.667v-2.666zm2.667 2.666V16h2.666v-2.667zm2.666 0H16v-2.666h-2.667z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "ModelScope icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#624AFF',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiModelscopeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#624AFF');
}
