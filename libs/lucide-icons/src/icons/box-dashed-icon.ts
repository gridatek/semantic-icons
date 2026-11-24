import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siBoxDashedIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M12 12v3" />
    <svg:path d="M12 22v-3" />
    <svg:path d="m18.268 18.732 1.732-1a2 2 0 001-1.733V14" />
    <svg:path d="M20.7 7 18 8.552" />
    <svg:path d="M21 10V8a2 2 0 00-1-1.73l-1.732-1" />
    <svg:path d="M3 10V8a2 2 0 011-1.73l1.732-1" />
    <svg:path d="M3.3 7 6 8.552" />
    <svg:path d="m5.732 18.732-1.732-1A2 2 0 013 16v-2" />
    <svg:path d="m9.268 20.732 1.732 1a2 2 0 002-.002l1.732-.998" />
    <svg:path d="m9.268 3.27 1.732-1a2 2 0 012 0l1.732 1" />
    <svg:path d="m9.468 10.54 2.533 1.462 2.533-1.463" />
  `,
  host: {
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    '[attr.stroke]': 'stroke()',
    '[attr.stroke-width]': 'strokeWidth()',
    '[attr.stroke-linecap]': 'strokeLinecap()',
    '[attr.stroke-linejoin]': 'strokeLinejoin()',
    'data-slot': 'icon',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBoxDashedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');

  readonly stroke = input<string>('currentColor');

  readonly strokeWidth = input<string | number>('2', {
    alias: 'stroke-width',
  });

  readonly strokeLinecap = input<string>('round', {
    alias: 'stroke-linecap',
  });

  readonly strokeLinejoin = input<string>('round', {
    alias: 'stroke-linejoin',
  });
}
