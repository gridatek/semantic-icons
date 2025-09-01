import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-franprix-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Franprix</svg:title>
    <svg:path
      d="M12 6.305c3.691 0 6.323-3.071 6.13-6.286-2.124-.17-5.069.791-6.13 3.79C10.939.81 7.993-.15 5.87.02 5.677 3.234 8.309 6.305 12 6.305m11.002 6.962c-.139-3.413-2.821-6.362-6.55-6.362-1.69 0-3.236.635-4.452 1.744-1.217-1.11-2.763-1.744-4.452-1.744-3.729 0-6.412 2.949-6.55 6.362C.758 19.19 5.913 24 12 24c6.087 0 11.242-4.81 11.002-10.733"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Franprix icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#EC6237',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFranprixIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#EC6237');
}
