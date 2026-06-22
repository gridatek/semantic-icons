import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siListIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M21 6a1 1 0 0 1 -1 1h-10a1 1 0 1 1 0 -2h10a1 1 0 0 1 1 1" />
    <svg:path d="M21 12a1 1 0 0 1 -1 1h-10a1 1 0 0 1 0 -2h10a1 1 0 0 1 1 1" />
    <svg:path d="M21 18a1 1 0 0 1 -1 1h-10a1 1 0 0 1 0 -2h10a1 1 0 0 1 1 1" />
    <svg:path
      d="M7 5.995v.02c0 1.099 -.895 1.99 -2 1.99s-2 -.891 -2 -1.99v-.02c0 -1.099 .895 -1.99 2 -1.99s2 .891 2 1.99"
    />
    <svg:path
      d="M7 11.995v.02c0 1.099 -.895 1.99 -2 1.99s-2 -.891 -2 -1.99v-.02c0 -1.099 .895 -1.99 2 -1.99s2 .891 2 1.99"
    />
    <svg:path
      d="M7 17.995v.02c0 1.099 -.895 1.99 -2 1.99s-2 -.891 -2 -1.99v-.02c0 -1.099 .895 -1.99 2 -1.99s2 .891 2 1.99"
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
export class SiListIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
