import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siKeeneticIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Keenetic</svg:title>
    <svg:path
      d="M15.718 10.188 24 2.376h-6.588L9.788 9.812H4.33V2.376H0v19.248h4.33V14.14h7.623c3.2 0 5.412.706 6.588 2.07.706.8 1.035 1.883 1.035 3.248v2.165h4.33v-2.165c0-2.353-.706-4.424-2.07-6.024-1.46-1.647-3.483-2.776-6.118-3.247"
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
    'data-brand-color': '#009EE2',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKeeneticIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Keenetic icon');
  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#009EE2');
}
