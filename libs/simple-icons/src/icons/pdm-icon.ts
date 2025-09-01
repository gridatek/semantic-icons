import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pdm-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>PDM</svg:title>
    <svg:path
      d="M10.44.418a3.12 3.12 0 0 1 3.12 0l7.69 4.44a3.12 3.12 0 0 1 1.56 2.702v8.88a3.12 3.12 0 0 1-1.56 2.702l-7.69 4.44a3.12 3.12 0 0 1-3.12 0l-7.69-4.44a3.12 3.12 0 0 1-1.56-2.702V7.56a3.12 3.12 0 0 1 1.56-2.702Zm3.87 3.315L12.311 2.58a.624.624 0 0 0-.624 0l-7.69 4.44a.624.624 0 0 0-.312.54v3.774l10.623-6.133Zm2.496 13.643 1.255.725 1.941-1.12a.624.624 0 0 0 .312-.541V7.56a.624.624 0 0 0-.312-.54l-3.196-1.845Zm-2.497-1.441V8.083l-6.8 3.926ZM3.686 14.217v2.223c0 .223.119.429.312.54l7.69 4.44a.624.624 0 0 0 .624 0l3.252-1.878-10.55-6.091Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "PDM icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#AC75D7',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPDMIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#AC75D7');
}
