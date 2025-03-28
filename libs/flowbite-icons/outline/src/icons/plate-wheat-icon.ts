import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-plate-wheat-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 5.00003h1M5 11h1M3 8.00003h4m8.5 0c-.1016.11084-1.5385-1.15738-1.7964-1.482-.3299-.41512-.7812-1.43054-.6974-1.50634.0838-.0758 1.1161.68119 1.3741 1.00581.258.32462 1.2213 1.87169 1.1197 1.98253Zm0 0c-.1016-.11084-1.5385 1.15738-1.7964 1.482-.3299.41512-.7812 1.43057-.6974 1.50637.0838.0758 1.1161-.6812 1.3741-1.00584.258-.32462 1.2213-1.87169 1.1197-1.98253Zm4 0c-.1016.11084-1.5385-1.15738-1.7964-1.482-.3299-.41512-.7812-1.43054-.6974-1.50634.0838-.0758 1.1161.68119 1.3741 1.00581.258.32462 1.2213 1.87169 1.1197 1.98253Zm0 0c-.1016-.11084-1.5385 1.15738-1.7964 1.482-.3299.41512-.7812 1.43057-.6974 1.50637.0838.0758 1.1161-.6812 1.3741-1.00584.258-.32462 1.2213-1.87169 1.1197-1.98253Zm-8.5 0h10m-9.9943-.00001c-.1016.11084-1.53849-1.15738-1.79646-1.48201-.32987-.41511-.7812-1.43053-.69738-1.50633.08383-.0758 1.11614.68118 1.3741 1.00581.25794.32462 1.22124 1.87168 1.11974 1.98253Zm0 0c-.1016-.11085-1.53849 1.1574-1.79646 1.48203-.32987.41511-.7812 1.43055-.69738 1.50635.08383.0758 1.11614-.6812 1.3741-1.00582.25794-.32463 1.22124-1.87172 1.11974-1.98256ZM8.59868 18.0116V19h6.80262v-.9884C18.39 17.3447 20.5872 15.8251 21 14H3c.41284 1.8251 2.60995 3.3447 5.59868 4.0116Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPlateWheatIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
