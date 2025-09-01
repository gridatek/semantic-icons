import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-milanote-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Milanote</svg:title>
    <svg:path
      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 12.943L15.057 16H8.943Zm4-4v6.114L12.943 12Zm-8 6.114V8.943L11.057 12Zm8.917 2.227a.665.665 0 0 0 .367-.367l-.003.009a.665.665 0 0 0 .052-.26V7.334a.667.667 0 0 0-1.138-.471L12 11.057 7.805 6.862a.667.667 0 0 0-1.138.471v9.334a.667.667 0 0 0 .666.666h9.334c.092 0 .18-.018.26-.052l-.01.004z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Milanote icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#31303A',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMilanoteIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#31303A');
}
