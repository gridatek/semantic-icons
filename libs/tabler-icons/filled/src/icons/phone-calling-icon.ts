import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPhoneCallingIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M9.928 3.629l2 5a1 1 0 0 1 -.414 1.228l-1.67 1.003a9.9 9.9 0 0 0 3.296 3.297l1.003 -1.671a1 1 0 0 1 1.228 -.414l5 2a1 1 0 0 1 .629 .928v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 3 -3h4a1 1 0 0 1 .928 .629"
    />
    <svg:path d="M16 7v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 2 0" />
    <svg:path d="M19 7v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 2 0" />
    <svg:path d="M22 7v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 2 0" />
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
export class SiPhoneCallingIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
