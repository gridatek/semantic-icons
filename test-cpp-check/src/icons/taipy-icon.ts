import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-taipy-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Taipy</svg:title>
    <svg:path
      d="M1.273 4.153a.971.971 0 0 1 .917-.65h21.325a.486.486 0 0 1 .458.646l-1.245 3.56a.971.971 0 0 1-.917.65H.486a.486.486 0 0 1-.459-.646Zm4.855 6.07a.971.971 0 0 1 .917-.65h8.337a.486.486 0 0 1 .458.645l-1.245 3.56a.971.971 0 0 1-.917.65H5.341a.486.486 0 0 1-.458-.646Zm2.698 6.068a.971.971 0 0 1 .917-.65h3.482a.486.486 0 0 1 .458.646l-1.246 3.56a.971.971 0 0 1-.916.65H8.039a.486.486 0 0 1-.458-.646Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Taipy icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#FF371A',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTaipyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FF371A');
}
