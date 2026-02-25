import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siLivekitIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>LiveKit</svg:title>
    <svg:path
      d="M0 0v24h14.4v-4.799h4.8V24H24v-4.8h-4.799v-4.8h-4.8v4.8H4.8V0H0zm14.4 14.4V9.602h4.801V4.8H24V0h-4.8v4.8h-4.8v4.8H9.6v4.8h4.8z"
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
    'data-brand-color': '#FFFFFF',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLivekitIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('LiveKit icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FFFFFF');
}
