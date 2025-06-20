import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hotwire-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Hotwire</svg:title>
    <svg:path
      d="m16.764 6.917-3.48.81L16.32 0 7.236 11.705l4.334-.854-4.087 7.982 2.364-.532L7.456 24l7.51-8.111-2.77.64 4.568-9.612z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHotwireIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FFE801');
}
