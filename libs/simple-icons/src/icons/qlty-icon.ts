import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-qlty-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Qlty</svg:title>
    <svg:path
      d="M12.453 20.437h10.204V24H12.453Zm2.456-.8 8.868-9.812L14.897 0l-2.444 2.7 6.437 7.125-6.437 7.124ZM9.102 0 .223 9.825l8.868 9.814 2.456-2.69L5.11 9.825 11.55 2.7Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Qlty icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#66FAEC',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiQltyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#66FAEC');
}
