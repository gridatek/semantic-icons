import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPlug3FillIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 22H7V20H17V22ZM10 5H14V2H16V5H20C20.5523 5 21 5.44772 21 6V15C21 17.2091 19.2091 19 17 19H7C4.79086 19 3 17.2091 3 15V6C3 5.44772 3.44772 5 4 5H8V2H10V5Z"
    />
  `,
  host: {
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPlug3FillIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
