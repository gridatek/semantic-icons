import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siAutoprefixerIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Autoprefixer</svg:title>
    <svg:path
      d="M5.87 21.045h2.923l.959-3.068h4.503l.949 3.068h2.922L11.94 2.955l-6.07 18.09zm6.162-10.12 1.543 4.917h-3.153l1.553-4.916h.057zM24 17.617l-.378-1.182-6.266-.59.733 2.127 5.91-.354zM6.644 15.843l-6.266.591L0 17.616l5.911.355.733-2.128z"
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
    'data-brand-color': '#DD3735',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAutoprefixerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Autoprefixer icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#DD3735');
}
