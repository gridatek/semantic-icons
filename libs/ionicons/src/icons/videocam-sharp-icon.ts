import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siVideocamSharpIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M336 208v-80a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v256a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-80l160 96V112Z"
    />
  `,
  host: {
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVideocamSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 512 512');
}
