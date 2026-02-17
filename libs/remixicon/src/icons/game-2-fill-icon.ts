import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siGame2FillIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7 4H9V6H15V4H17V2H19V6H17V8H19V10H23V16H21V12H20V18H17V20H19V22H15V18H9V22H5V20H7V18H4V12H3V16H1V10H5V8H7V6H5V2H7V4ZM9 11V14H11V11H9ZM13 11V14H15V11H13Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGame2FillIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
