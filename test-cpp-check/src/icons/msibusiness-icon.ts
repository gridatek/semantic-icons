import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-msi-business-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>MSI Business</svg:title>
    <svg:path
      d="m15.215 10.794 3.78 2.416h-2.663l-3.78-2.416h2.663zM5.656 8.518l-.438 1.626-.175.65-.652 2.416-.175.65-.437 1.622h1.869l.437-1.622.175-.65.651-2.416.175-.65.438-1.626H5.656zm6.06 5.342-.437 1.622h4.947l2.543-1.622h-7.053zm3.556-5.342-2.548 1.626h7.086l.438-1.626h-4.976zm6.86 0-.438 1.626-.175.65-.651 2.416-.175.65-.437 1.622h1.869l.437-1.622.175-.65.651-2.416.175-.65L24 8.518h-1.868zm-20.255 0-.438 1.626-.175.65-.651 2.416-.175.65L0 15.482h1.869l.437-1.622.175-.65.651-2.416.175-.65.438-1.626H1.877zm7.536 0-.438 1.626-.175.65-.651 2.416-.175.65-.437 1.622h1.869l.437-1.622.175-.65.651-2.416.175-.65.438-1.626H9.413z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "MSI Business icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#9A8555',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMSIBusinessIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#9A8555');
}
