import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siAnycubicIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Anycubic</svg:title>
    <svg:path
      d="m6.762.534 8.728 3.481 8.469 7.449-6.494-.631L6.762.534Zm10.72 10.463 6.518.581-7.826 8.749-8.649 3.139 9.957-12.469ZM6.592.601l10.699 10.331L7.355 23.44 0 12.465 6.592.601Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Anycubic icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#476695',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAnycubicIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#476695');
}
