import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siReorderFourSharpIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M102 304h308M102 208h308M102 112h308M102 400h308"
      fill="none"
      stroke="currentColor"
      stroke-linecap="square"
      stroke-linejoin="round"
      stroke-width="44px"
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
export class SiReorderFourSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 512 512');
}
