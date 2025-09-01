import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-commonworkflowlanguage-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Common Workflow Language</svg:title>
    <svg:path
      d="M13.905 0L8.571 5.4l.037.037.096.096 3.586 3.395-2.24 2.252h-.01l-1.576 1.586 3.737 3.766-3.735 3.803.126.139v.012L12.052 24l1.608-1.64-1.98-2.034 3.737-3.79-1.608-1.642-.01.012-2.13-2.129 3.867-3.866-.017-.015.016-.016-3.641-3.524 3.64-3.694z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Common Workflow Language icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#B5314C',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCommonworkflowlanguageIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#B5314C');
}
