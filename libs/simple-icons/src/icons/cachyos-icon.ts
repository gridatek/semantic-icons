import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siCachyosIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>CachyOS</svg:title>
    <svg:path
      d="M5.301 2.646 0 11.771l5.541 9.583h11.486l2.904-5.017H8.102l-2.56-4.429L8.067 7.54h6.063l2.83-4.893ZM20.058 4.12a.748.748 0 0 0 0 1.496.748.748 0 0 0 0-1.496m-1.983 4.303a1.45 1.45 0 0 0 0 2.9 1.45 1.45 0 0 0 0-2.9m4.02 3.98a1.904 1.904 0 0 0 0 3.809 1.904 1.904 0 0 0 0-3.81"
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
    'data-brand-color': '#00AA88',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCachyosIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('CachyOS icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00AA88');
}
