import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siHeliumBrowserIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Helium Browser</svg:title>
    <svg:path
      d="M14.3081 22.2984 12 24l-2.3081-1.7016 1.0489-8.1189-6.5174 4.9661L1.5938 18l.321-2.8467L9.4808 12l-7.566-3.1533L1.5938 6l2.6296-1.1456 6.5174 4.9661-1.049-8.119L12 0l2.3081 1.7016-1.0488 8.1189 6.5173-4.9661L22.4062 6l-.321 2.8467L14.5192 12l7.566 3.1533.321 2.8467-2.6296 1.1456-6.5173-4.9661z"
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
    'data-brand-color': '#3450D1',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHeliumBrowserIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Helium Browser icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#3450D1');
}
