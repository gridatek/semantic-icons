import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siFlutterLineIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.5979 10.6843H17.4264L11.7688 16.3419L17.4264 21.998H14.5979L8.94108 16.3412L14.5979 10.6843ZM14.4044 2.00439H17.2328L5.9191 13.3181L4.50488 11.9039L14.4044 2.00439Z"
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
export class SiFlutterLineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
