import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siSatelliteIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M21 14a1 1 0 0 1 1 1a7 7 0 0 1 -7 7a1 1 0 0 1 0 -2a5 5 0 0 0 5 -5a1 1 0 0 1 1 -1m-4 -.5a1 1 0 0 1 1 1a3.5 3.5 0 0 1 -3.5 3.5a1 1 0 0 1 -.117 -1.993l.117 -.007a1.5 1.5 0 0 0 1.493 -1.356l.007 -.144a1 1 0 0 1 1 -1m-13.829 -2.087l4 4.001q .212 .212 .445 .384l-.909 .91a1 1 0 0 1 -1.414 0l-3 -3a1 1 0 0 1 0 -1.415zm5.243 -8.413l5.586 5.586a2 2 0 0 1 0 2.828l-.586 .585l.793 .794a1 1 0 0 1 -1.414 1.414l-.793 -.794l-.586 .587a2 2 0 0 1 -2.828 0l-5.586 -5.586a2 2 0 0 1 -.18 -2.618l.127 -.152l.053 -.058l2.586 -2.586a2 2 0 0 1 2.828 0m5.293 -.707l3 3a1 1 0 0 1 0 1.414l-.908 .91a4 4 0 0 0 -.384 -.445l-4.001 -4l.879 -.88a1 1 0 0 1 1.414 0"
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
export class SiSatelliteIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
