import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siEeFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#1791ff" d="M0 0h640v160H0z" />
    <svg:path fill="#000001" d="M0 160h640v160H0z" />
    <svg:path fill="#fff" d="M0 320h640v160H0z" />
  `,
  host: {
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEeFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 640 480');
}
