import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wyze-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Wyze</svg:title>
    <svg:path
      d="M5.475 13.171 7.3 9.469h.974L5.779 14.53h-.608l-1.034-2.082-1.034 2.082h-.609L0 9.469h.973l1.826 3.673.851-1.706-.973-1.967h.973l1.825 3.702Zm8.457-3.702-2.251 3.442v1.591h-.882v-1.591L8.517 9.469h1.034l1.673 2.545 1.673-2.545h1.035Zm5.444 4.194H24v.867h-4.624v-.867Zm0-4.194H24v.868h-4.624v-.868Zm0 2.083H24v.867h-4.624v-.867Zm-.273-2.083-3.438 4.223h3.133v.838H13.84l3.407-4.222h-3.042v-.839h4.898Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Wyze icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#1DF0BB',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWyzeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#1DF0BB');
}
