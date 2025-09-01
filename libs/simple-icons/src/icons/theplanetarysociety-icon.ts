import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-theplanetarysociety-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>The Planetary Society</svg:title>
    <svg:path
      d="M3.545 1.81A12.428 12.428 0 0 0 0 2.35a10.409 10.409 0 0 1 1.838-.146c5.602.048 10.114 4.543 10.16 10.075-2.263 1.066-4.976 2.147-7.986 3.158-1.258.423-2.956 1.053-3.751 1.482a2.073 2.073 0 0 1-.04.035l.257-.065c1.338-.338 2.714-.703 4.112-1.116a106.969 106.969 0 0 0 7.364-2.455c-.404 4.299-3.506 7.81-7.599 8.872 5.472-.627 9.837-4.8 10.155-9.883 6.236-2.597 9.957-5.18 9.443-6.805-.454-1.435-5.038-1.7-11.657-.554.229.226.492.512.757.826 3.3-.31 5.532-.007 5.83.934.335 1.06-1.348 2.612-4.382 4.296-.395-5.198-5.1-9.236-10.956-9.194z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "The Planetary Society icon"',
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
export class SiTheplanetarysocietyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
