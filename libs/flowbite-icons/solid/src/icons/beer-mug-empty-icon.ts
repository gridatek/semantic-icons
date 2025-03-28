import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-beer-mug-empty-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      fill-rule="evenodd"
      d="M3.94343 4.87524C4.00931 3.82117 4.88341 3 5.93953 3h9.12107c1.0562 0 1.9303.82117 1.9961 1.87524L17.0645 5h2.9356c.5523 0 1 .44772 1 1v3.85927c0 1.67173-.8355 3.23293-2.2265 4.16023l-1.0995.733L17.752 16H3.24813l.6953-11.12476ZM17.5298 12.445l.1344-.0896c.8346-.5564 1.3359-1.4931 1.3359-2.49613V7h-1.8106l.3403 5.445ZM10 7c0-.55228-.44772-1-1-1s-1 .44772-1 1v7c0 .5523.44772 1 1 1s1-.4477 1-1V7Zm3 0c0-.55228-.4477-1-1-1s-1 .44772-1 1v7c0 .5523.4477 1 1 1s1-.4477 1-1V7Z"
      clip-rule="evenodd"
    />
    <svg:path
      fill="currentColor"
      d="m3.12313 18-.0547.8752C2.99647 20.0266 3.91089 21 5.06453 21H15.9356c1.1537 0 2.0681-.9734 1.9961-2.1248L17.877 18H3.12313Z"
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
export class SiBeerMugEmptyIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
