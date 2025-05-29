import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-stroopwafel-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      d="M10.9999 2.04938c-.6896.06847-1.35872.20702-1.99996.40842V7h1.99996V2.04938ZM6.99994 3.33782C5.4818 4.21602 4.21596 5.48186 3.33776 7h3.66218V3.33782ZM2.45774 9c-.2014.64124-.33995 1.3103-.40842 2h4.95062V9h-4.5422Zm-.40842 4c.06847.6897.20702 1.3588.40842 2h4.5422v-2H2.04932Zm1.28844 4c.8782 1.5181 2.14404 2.784 3.66218 3.6622V17H3.33776Zm5.66218 4.5422c.64124.2014 1.31036.34 1.99996.4084V17H8.99994v4.5422Zm3.99996.4084c.6897-.0684 1.3588-.207 2-.4084V17h-2v4.9506Zm4-1.2884c1.5182-.8782 2.784-2.1441 3.6622-3.6622h-3.6622v3.6622ZM21.5421 15c.2014-.6412.34-1.3103.4085-2h-4.9507v2h4.5422Zm.4085-4c-.0685-.6897-.2071-1.35876-.4085-2h-4.5422v2h4.9507Zm-1.2885-4c-.8782-1.51814-2.144-2.78398-3.6622-3.66218V7h3.6622Zm-5.6622-4.5422c-.6412-.2014-1.3103-.33995-2-.40842V7h2V2.4578ZM8.99994 9h1.99996v2H8.99994V9Zm0 4h1.99996v2H8.99994v-2Zm3.99996 0v2h2v-2h-2Zm0-2h2V9h-2v2Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiStroopwafelIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
