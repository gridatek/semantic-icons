import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPlayCanvasIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>PlayCanvas</svg:title>
    <svg:path
      d="M6.115 0l-.002 3.414 5.823 3.41-5.82 3.414-.003 3.412 11.774-6.826zm11.77 10.35L6.113 17.174 17.887 24l-.002-3.414-5.82-3.412 5.822-3.412z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "PlayCanvas icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#E05F2C',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPlayCanvasIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#E05F2C');
}
