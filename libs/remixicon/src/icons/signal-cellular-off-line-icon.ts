import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siSignalCellularOffLineIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22.207 20.793L20.793 22.207L19.5859 21H16V17.4141L15 16.4141V21H9V10.4141L1.79297 3.20703L3.20703 1.79297L22.207 20.793ZM8 21H2V13H8V21ZM4 19H6V15H4V19ZM11 19H13V14.4141L11 12.4141V19ZM22 17.7578L20 15.7578V5H18V13.7578L16 11.7578V3H22V17.7578ZM15 10.7578L12.2422 8H15V10.7578Z"
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
export class SiSignalCellularOffLineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
