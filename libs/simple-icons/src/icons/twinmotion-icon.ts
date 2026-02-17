import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siTwinmotionIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Twinmotion</svg:title>
    <svg:path
      d="M12 .1175C7.08.1175 2.8508 3.0792.9994 7.3172h15.7994v.0045l-2.364 16.5475C19.8947 22.7444 24 17.9096 24 12.1175h-6.261l.6875-4.8003h4.5741C21.1484 3.0784 16.9208.1175 12 .1175m-12 12c0 5.8163 4.1393 10.666 9.6331 11.765l1.681-11.765Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Twinmotion icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#000000',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTwinmotionIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
