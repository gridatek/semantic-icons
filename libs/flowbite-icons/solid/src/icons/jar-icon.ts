import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-jar-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      d="M7 3c0-.55228.44772-1 1-1h8c.5523 0 1 .44772 1 1v2h1c.5523 0 1 .44772 1 1 0 .44954-.2966.8298-.7048.95572.6113.76712 1.3165 1.84205 1.589 3.04428H11c-.5523 0-1 .4477-1 1v7c0 .5523.4477 1 1 1h9v.002C20 21.2121 18.2083 23 16 23H8c-2.20825 0-4-1.7879-4-3.998V11c0-1.59816.92812-3.06965 1.70483-4.04428C5.29662 6.82979 5 6.44954 5 6c0-.55228.44772-1 1-1h1V3Z"
    />
    <svg:path fill="currentColor" d="M20 17v-5h-8v5h8Z" />
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
export class SiJarIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
