import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siLangchainCorporateIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>LangChain Corporate</svg:title>
    <svg:path
      d="M7.53 15.975a7.53 7.53 0 0 0 2.206-5.325A7.54 7.54 0 0 0 7.53 5.325L2.205 0A7.54 7.54 0 0 0 0 5.325a7.54 7.54 0 0 0 2.205 5.325zm11.144.493a7.54 7.54 0 0 0-5.325-2.206 7.54 7.54 0 0 0-5.325 2.206l5.325 5.325a7.54 7.54 0 0 0 5.325 2.205A7.54 7.54 0 0 0 24 21.793zM2.219 21.78a7.54 7.54 0 0 0 5.325 2.205v-7.53H.014a7.54 7.54 0 0 0 2.205 5.325M20.73 8.595a7.53 7.53 0 0 0-5.327-2.206 7.53 7.53 0 0 0-5.325 2.207l5.325 5.325z"
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
    'data-brand-color': '#7FC8FF',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLangchainCorporateIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('LangChain Corporate icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#7FC8FF');
}
