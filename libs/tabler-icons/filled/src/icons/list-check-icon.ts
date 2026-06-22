import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siListCheckIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M8.207 3.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1 -1.414 0l-1.5 -1.5a1 1 0 0 1 1.414 -1.414l.793 .793l1.793 -1.793a1 1 0 0 1 1.414 0"
    />
    <svg:path
      d="M8.207 9.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1 -1.414 0l-1.5 -1.5a1 1 0 0 1 1.414 -1.414l.793 .793l1.793 -1.793a1 1 0 0 1 1.414 0"
    />
    <svg:path
      d="M8.207 15.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1 -1.414 0l-1.5 -1.5a1 1 0 0 1 1.414 -1.414l.793 .793l1.793 -1.793a1 1 0 0 1 1.414 0"
    />
    <svg:path d="M21 6a1 1 0 0 1 -1 1h-9a1 1 0 0 1 0 -2h9a1 1 0 0 1 1 1" />
    <svg:path d="M21 12a1 1 0 0 1 -1 1h-9a1 1 0 0 1 0 -2h9a1 1 0 0 1 1 1" />
    <svg:path d="M21 18a1 1 0 0 1 -1 1h-9a1 1 0 0 1 0 -2h9a1 1 0 0 1 1 1" />
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
export class SiListCheckIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
