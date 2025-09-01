import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mermaid-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Mermaid</svg:title>
    <svg:path
      d="M23.99 2.115A12.223 12.223 0 0 0 12 10.149 12.223 12.223 0 0 0 .01 2.115a12.23 12.23 0 0 0 5.32 10.604 6.562 6.562 0 0 1 2.845 5.423v3.754h7.65v-3.754a6.561 6.561 0 0 1 2.844-5.423 12.223 12.223 0 0 0 5.32-10.604Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Mermaid icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#FF3670',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMermaidIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FF3670');
}
