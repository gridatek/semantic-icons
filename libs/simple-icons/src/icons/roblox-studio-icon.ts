import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siRobloxStudioIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Roblox Studio</svg:title>
    <svg:path
      d="M 13.936 15.356 L 1.826 12.112 L 0 18.93 L 18.928 24 L 21.608 14.01 L 14.79 12.18 L 13.936 15.356 Z M 5.072 0 L 2.394 9.992 L 9.21 11.822 L 10.064 8.644 L 22.174 11.89 L 24 5.072 L 5.072 0 Z"
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
    'data-brand-color': '#00A2FF',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRobloxStudioIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Roblox Studio icon');
  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00A2FF');
}
