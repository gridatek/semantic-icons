import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siNomadIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Nomad</svg:title>
    <svg:path
      d="m12.004 0-10.4 6v12l10.392 6 10.4-6V6L12.004 0zm4.639 13.204-2.77 1.6-3.347-1.832v3.826l-3.144 1.995V10.8L9.88 9.272l3.462 1.823V7.191l3.301-1.984v7.997z"
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
    'data-brand-color': '#00CA8E',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNomadIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Nomad icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00CA8E');
}
