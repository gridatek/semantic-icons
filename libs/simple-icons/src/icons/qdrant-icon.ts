import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siQdrantIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Qdrant</svg:title>
    <svg:path
      d="m12 16.5 3.897-2.25v-4.5L12 7.5 8.103 9.75v4.5zM1.607 18 12 24l3.897-2.25v-4.5L12 19.5l-6.495-3.75v-7.5L12 4.5l6.495 3.75v15L22.393 21V6L12 0 1.607 6Z"
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
    'data-brand-color': '#DC244C',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiQdrantIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Qdrant icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#DC244C');
}
