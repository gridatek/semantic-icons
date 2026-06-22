import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siTrezorIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Trezor</svg:title>
    <svg:path
      d="M17.858 5.569c0-3.044-2.643-5.569-5.86-5.569-3.216 0-5.856 2.525-5.856 5.569v1.78H3.731V20.15L11.998 24l8.271-3.849V7.403h-2.411zm-8.73 0c0-1.434 1.264-2.584 2.87-2.584 1.61 0 2.87 1.15 2.87 2.584v1.78h-5.74Zm7.81 12.516-4.94 2.298-4.937-2.298v-7.693h9.878z"
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
    'data-brand-color': '#141609',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTrezorIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Trezor icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#141609');
}
