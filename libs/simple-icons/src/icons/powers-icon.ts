import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-powers-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>POWERS</svg:title>
    <svg:path
      d="M12.31 12.347s-.008.73-.008 1.068c0 .34.339.544.777.544v.486h-2.988v-.486c.408 0 .79-.204.79-.544v-2.673c0-.545-.52-.557-.79-.595v-.466h2.55c1.042 0 2.403-.125 2.403 1.228 0 1.403-1.233 1.441-2.304 1.441zm-.017-2.212v1.559h.494c.35 0 .777-.063.777-.772 0-.749-.318-.795-.907-.795-.254 0-.364.008-.364.008zM12 4.551l12 7.45-12 7.448L0 12zm-8.645 7.45c2.764 1.713 7.373 4.575 8.645 5.364L20.644 12A7141.71 7141.71 0 0 0 12 6.636c-1.272.787-5.881 3.649-8.645 5.365Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "POWERS icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#E74536',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPowersIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#E74536');
}
