import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siBaseUiIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Base UI</svg:title>
    <svg:path
      d="M13.082 6.562a.52.52 0 0 0-.546.529V24a8.727 8.727 0 0 0 .546-17.438M11.446 9.6V24c-4.82 0-8.728-4.298-8.728-9.6V0c4.82 0 8.728 4.298 8.728 9.6Z"
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
    'data-brand-color': '#EDEDED',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBaseUiIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Base UI icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#EDEDED');
}
