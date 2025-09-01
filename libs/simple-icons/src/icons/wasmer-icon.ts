import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wasmer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Wasmer</svg:title>
    <svg:path
      d="M18.111 3.537c-.011.822-.5 1.208-1.111.86-.611-.353-1.106-1.307-1.111-2.146L12 0v4.651l5.561 3.222.55.32v7.763L22 18.206V5.794l-3.889-2.256Zm-5 3.034c-.011.822-.5 1.208-1.111.86-.611-.352-1.106-1.307-1.111-2.145l-3.89-2.252V7.41l5.562 3.222.55.32v8.038L17 21.241V8.828L13.11 6.57Zm-5 2.759c-.011.822-.5 1.208-1.111.86-.611-.353-1.106-1.307-1.111-2.146L2 5.794v12.413L12 24V11.586L8.111 9.33Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Wasmer icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#4946DD',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWasmerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#4946DD');
}
