import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPayloadCmsIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Payload CMS</svg:title>
    <svg:path
      d="M11.9 20.4q.1.1.2 0l5.5-3.2q.1-.05.2 0l2.6 1.5q.2.15 0 .3l-8.3 5h-.2L1.8 18.1q-.2-.1-.2-.3V6.2q0-.2.2-.3l1.3-.8q.15-.1.3 0l9.8 5.7q.2.1.2.3v3.1q0 .3-.2.2L4.9 9.6q-.2-.1-.2.2V16q0 .2.2.3zM22.3 5.9q.1.1.1.2v9.8q0 .2-.2.1l-2.7-1.5q-.2-.1-.2-.3V7.9q0-.2-.2-.3l-7-4q-.1-.05-.2 0L9.5 5q-.1.05-.2 0L6.7 3.4q-.2-.15 0-.3L11.9 0h.2z"
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
    'data-brand-color': '#000000',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPayloadCmsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Payload CMS icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
