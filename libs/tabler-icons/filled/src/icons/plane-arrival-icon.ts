import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPlaneArrivalIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M10.466 2.271l2.898 .777a1 1 0 0 1 .708 .711l1.904 7.235l4.255 1.141a3 3 0 1 1 -1.539 5.799l-14.489 -3.882a1 1 0 0 1 -.72 -.765l-1.347 -6.572a1 1 0 0 1 1.239 -1.167l2.898 .776a1 1 0 0 1 .607 .466l1.207 2.091l1.217 .326l-.098 -5.954a1 1 0 0 1 1.259 -.982"
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
export class SiPlaneArrivalIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
