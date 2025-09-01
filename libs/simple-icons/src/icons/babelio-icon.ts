import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-babelio-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Babelio</svg:title>
    <svg:path
      d="M15.283 0a13.994 13.994 0 0 1-6.566 7.588v4.691a20.538 20.538 0 0 0 6.566-3.676zm3.283 7.7a22.121 22.121 0 0 1-13.132 7.03v4.213a35.545 35.545 0 0 0 3.836-.564 35.118 35.118 0 0 0 9.296-3.322zm3.282 7.331a36.747 36.747 0 0 1-19.696 5.686V24h19.696Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Babelio icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#FBB91E',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBabelioIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FBB91E');
}
