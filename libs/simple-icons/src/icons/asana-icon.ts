import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siAsanaIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Asana</svg:title>
    <svg:path
      d="M18.78 12.653c-2.882 0-5.22 2.336-5.22 5.22s2.338 5.22 5.22 5.22 5.22-2.34 5.22-5.22-2.336-5.22-5.22-5.22zm-13.56 0c-2.88 0-5.22 2.337-5.22 5.22s2.338 5.22 5.22 5.22 5.22-2.338 5.22-5.22-2.336-5.22-5.22-5.22zm12-6.525c0 2.883-2.337 5.22-5.22 5.22-2.882 0-5.22-2.337-5.22-5.22 0-2.88 2.338-5.22 5.22-5.22 2.883 0 5.22 2.34 5.22 5.22z"
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
    'data-brand-color': '#F06A6A',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAsanaIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Asana icon');
  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#F06A6A');
}
