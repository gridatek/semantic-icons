import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-the-conversation-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>The Conversation</svg:title>
    <svg:path
      d="M23.996 10.543c-.131-4.91-4.289-8.773-9.2-8.773H9.005a8.997 8.997 0 0 0-5.957 15.746L1.05 22.23l4.942-2.98c.95.36 1.964.524 3.012.524h6.024c5.04 0 9.099-4.156 8.969-9.23zm-8.937 5.958H9.07c-2.587 0-5.205-2.03-5.696-4.583a5.724 5.724 0 0 1 5.63-6.874h5.99c2.586 0 5.205 2.03 5.696 4.582.688 3.667-2.095 6.875-5.63 6.875z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "The Conversation icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#D8352A',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTheConversationIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#D8352A');
}
