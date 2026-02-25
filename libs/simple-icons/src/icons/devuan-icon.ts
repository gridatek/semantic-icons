import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siDevuanIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Devuan</svg:title>
    <svg:path
      d="M0 .415C42.518 10.56 2.297 18.812 2.297 18.812c-.792.127-1.432.54-1.816 1.167-.433.704-.47 1.656-.066 2.326.492.814 1.114 1.096 1.65 1.217.845.191 1.527-.113 1.527-.113s20.562-6.11 20.407-12.214C23.922 8.131 17.694 2.948 0 .415"
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
    'data-brand-color': '#004489',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDevuanIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Devuan icon');
  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#004489');
}
