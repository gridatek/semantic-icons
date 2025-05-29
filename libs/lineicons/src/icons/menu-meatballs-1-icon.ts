import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-menu-meatballs-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.3125 13.7558C5.346 13.7559 4.5625 12.9723 4.5625 12.0059V11.9959C4.5625 11.0294 5.346 10.2458 6.3125 10.2458C7.279 10.2458 8.0625 11.0294 8.0625 11.9958V12.0058C8.0625 12.9723 7.279 13.7558 6.3125 13.7558Z"
      fill="#323544"
    />
    <svg:path
      d="M18.3125 13.7558C17.346 13.7558 16.5625 12.9723 16.5625 12.0058V11.9958C16.5625 11.0294 17.346 10.2458 18.3125 10.2458C19.279 10.2458 20.0625 11.0294 20.0625 11.9958V12.0058C20.0625 12.9723 19.279 13.7558 18.3125 13.7558Z"
      fill="#323544"
    />
    <svg:path
      d="M10.5625 12.0058C10.5625 12.9723 11.346 13.7558 12.3125 13.7558C13.279 13.7558 14.0625 12.9723 14.0625 12.0058V11.9958C14.0625 11.0294 13.279 10.2458 12.3125 10.2458C11.346 10.2458 10.5625 11.0294 10.5625 11.9958V12.0058Z"
      fill="#323544"
    />
  `,
  host: {
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
export class SiMenuMeatballs1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
