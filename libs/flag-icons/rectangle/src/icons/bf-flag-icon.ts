import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siBfFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:g fill-rule="evenodd">
      <svg:path fill="#de0000" d="M640 479.6H.4V0H640z" />
      <svg:path fill="#35a100" d="M639.6 480H0V240.2h639.6z" />
      <svg:path
        fill="#fff300"
        d="M320 160 338 215.3 396.1 215.3 349.1 249.4 367 304.7 320 270.6 273 304.7 290.9 249.4 243.9 215.3 302 215.3z"
      />
    </svg:g>
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
export class SiBfFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 640 480');
}
