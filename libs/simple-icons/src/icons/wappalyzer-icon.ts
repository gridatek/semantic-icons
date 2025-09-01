import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wappalyzer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Wappalyzer</svg:title>
    <svg:path
      d="M24 11.014v-.604L12 1.805 0 10.41v.603l12 8.606 12-8.605zM8.634 10.82l2.75 1.07.016-.01-1.526-1.967.984-.72 2.695 1.116.016-.011-1.463-2.018 1.247-.913 2.6 3.85-1.046.766-2.797-1.157-.012.008 1.593 2.038-1.048.767-5.26-1.903 1.251-.916zm14.418 1.488l.947.679v.603l-12 8.605L0 13.59v-.603l.947-.678 10.761 7.717.292.21.291-.21 10.762-7.717z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Wappalyzer icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#4608AD',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWappalyzerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#4608AD');
}
