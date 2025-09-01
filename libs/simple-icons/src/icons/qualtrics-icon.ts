import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-qualtrics-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Qualtrics</svg:title>
    <svg:path
      d="M20.14 5.518l-2.695 9.538h-.034l-2.89-9.538H8.125l-2.19 3.893-2.318-3.893H.368l3.78 6.116L0 18.486h2.993l2.66-4.534 2.755 4.534h4.906v-8.99h.034q.102.564.195.966.093.402.175.744c.057.228.118.445.184.65.065.206.132.43.2.677l1.926 5.949h2.523l1.942-5.95q.213-.718.398-1.385a14.544 14.544 0 0 0 .32-1.506h.035v8.845H24V5.514zM7.373 11.651l3.383-5.616v11.118z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Qualtrics icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#00B4EF',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiQualtricsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00B4EF');
}
