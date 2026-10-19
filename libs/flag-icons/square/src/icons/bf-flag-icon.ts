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
      <svg:path fill="#de0000" d="M512 511.6H.5V0H512z" />
      <svg:path fill="#35a100" d="M511.8 512H0V256.2h511.7z" />
    </svg:g>
    <svg:path
      fill="#fff300"
      fill-rule="evenodd"
      d="M256 170.7 275.2 229.6 337.2 229.6 287 266.1 306.2 325 256 288.6 205.8 325 225 266.1 174.9 229.6 236.9 229.6z"
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
export class SiBfFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 512 512');
}
