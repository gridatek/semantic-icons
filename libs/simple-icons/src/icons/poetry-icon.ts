import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPoetryIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Poetry</svg:title>
    <svg:path
      d="M21.604 0a19.144 19.144 0 0 1-5.268 13.213L2.396 0l13.583 13.583a19.149 19.149 0 0 1-13.583 5.624V0h19.208Zm-1.911 17.297A24.455 24.455 0 0 1 7.189 24l-4.053-4.053a19.91 19.91 0 0 0 13.37-5.838l3.187 3.188Z"
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
    'data-brand-color': '#60A5FA',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPoetryIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Poetry icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#60A5FA');
}
