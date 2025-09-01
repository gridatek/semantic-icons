import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-googlechat-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Google Chat</svg:title>
    <svg:path
      d="M1.637 0C.733 0 0 .733 0 1.637v16.5c0 .904.733 1.636 1.637 1.636h3.955v3.323c0 .804.97 1.207 1.539.638l3.963-3.96h11.27c.903 0 1.636-.733 1.636-1.637V5.592L18.408 0Zm3.955 5.592h12.816v8.59H8.455l-2.863 2.863Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Google Chat icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#34A853',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGooglechatIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#34A853');
}
