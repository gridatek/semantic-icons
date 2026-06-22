import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPlaneDepartureIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M9.674 3.827l5.267 5.315l4.25 -1.139a3 3 0 1 1 1.572 5.79l-14.49 3.883a1 1 0 0 1 -1.006 -.303l-4.45 -5.02a1 1 0 0 1 .49 -1.629l2.896 -.776a1 1 0 0 1 .759 .1l2.091 1.207l1.217 -.326l-3.062 -5.107a1 1 0 0 1 .599 -1.48l2.898 -.777a1 1 0 0 1 .97 .262"
    />
    <svg:path d="M22 21a1 1 0 0 1 -1 1h-18a1 1 0 0 1 0 -2h18a1 1 0 0 1 1 1" />
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
export class SiPlaneDepartureIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
