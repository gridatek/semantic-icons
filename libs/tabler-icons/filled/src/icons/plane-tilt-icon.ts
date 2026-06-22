import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPlaneTiltIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M21.107 2.893a3.047 3.047 0 0 1 .012 4.302l-2.479 2.564l2.309 6.925a1 1 0 0 1 -.235 1.016l-2.5 2.55a1 1 0 0 1 -1.596 -.229l-2.864 -5.36l-1.754 1.753v2.586a1 1 0 0 1 -.293 .707l-2 2a1 1 0 0 1 -1.656 -.39l-1.341 -4.027l-4.025 -1.342a1 1 0 0 1 -.391 -1.656l2 -2a1 1 0 0 1 .706 -.292h2.586l1.757 -1.757l-5.317 -2.863a1 1 0 0 1 -.233 -1.587l2.5 -2.5a1 1 0 0 1 1.023 -.242l6.925 2.309l2.552 -2.467a3.05 3.05 0 0 1 4.314 0"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPlaneTiltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
