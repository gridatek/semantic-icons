import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-interactjs-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>InteractJS</svg:title>
    <svg:path
      d="M12.382.01C12.255.006 12.128 0 12 0A11.999 11.999 0 0 0 1.804 18.327l9.911-17.17zm7.097 19.686L11.201 5.121 2.788 19.689l.007.007h16.684zm.184 1.538H4.337a11.998 11.998 0 0 0 15.326 0zm2.917-3.568A11.999 11.999 0 0 0 12.382.01l.667 1.148zM12.383.009l-.001.001h.001V.009z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "InteractJS icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#2599ED',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInteractjsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#2599ED');
}
