import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pkgsrc-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>pkgsrc</svg:title>
    <svg:path
      d="m12.908 8.763 9.157-5.132L11.25 0 1.62 4.42Zm1.5 2.29 9-5.368-.948 11.84-8.191 6.382zM.593 6.712 1.619 18.79 11.922 24l-.12-12.788Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "pkgsrc icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#FF6600',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPkgsrcIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FF6600');
}
