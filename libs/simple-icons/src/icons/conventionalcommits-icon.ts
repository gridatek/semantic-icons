import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-conventionalcommits-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Conventional Commits</svg:title>
    <svg:path
      d="M12 0C5.382 0 0 5.382 0 12s5.382 12 12 12 12-5.382 12-12S18.618 0 12 0zm0 1.6c5.753 0 10.4 4.647 10.4 10.4S17.753 22.4 12 22.4 1.6 17.753 1.6 12 6.247 1.6 12 1.6z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Conventional Commits icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#FE5196',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiConventionalcommitsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FE5196');
}
