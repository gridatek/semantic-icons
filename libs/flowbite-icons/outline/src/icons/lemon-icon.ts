import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-lemon-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12.3058 8.29519C9.55698 9.38222 8.81979 11.2498 9.00197 13.9395M14.667 4.18096l-1.0565.50487c-.3418.13297-1.523.3194-1.7152.3194-4.83207.6468-7.74553 5.76877-5.88136 10.33957l.4506 1.1049c.07315.1793.1279.4848.13448.5625.00656.0775.09722 1.1779.09749 1.1811.00001.0001 0 .0001.00001.0002.10784 1.3052 1.46355 2.1014 2.63163 1.5474.00336-.0016.00624-.003.00959-.0046.07162-.0347.97416-.4719 1.05206-.5027.081-.032.3576-.1377.5472-.1631l1.168-.1563c4.832-.6468 7.7455-5.7687 5.8813-10.33958l-.4506-1.10485c-.0731-.17935-.1185-.3691-.1345-.56253l-.0975-1.18113c-.1079-1.30718-1.4674-2.10389-2.6367-1.54515Z"
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
export class SiLemonIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
