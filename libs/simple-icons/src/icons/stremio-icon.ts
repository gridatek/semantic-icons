import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-stremio-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Stremio</svg:title>
    <svg:path
      d="M12 0a1.2 1.2 0 0 0-.85.354L.353 11.15c-.47.47-.47 1.227 0 1.697L11.15 23.647a1.2 1.2 0 0 0 1.7 0l10.797-10.8c.47-.47.47-1.226 0-1.696L12.85.354A1.2 1.2 0 0 0 12 0zm-1.674 7.586a.2.2 0 0 1 .002 0 .2.2 0 0 1 .129.04l5.729 4.214a.2.2 0 0 1 0 .323l-5.73 4.213a.2.2 0 0 1-.317-.16v-8.43a.2.2 0 0 1 .187-.2z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Stremio icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#685CEE',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiStremioIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#685CEE');
}
