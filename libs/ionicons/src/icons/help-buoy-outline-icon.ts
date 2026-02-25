import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siHelpBuoyOutlineIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle
      cx="256"
      cy="256"
      r="208"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:circle
      cx="256"
      cy="256"
      r="80"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
    />
    <svg:path
      d="m208 54 8 132M296 186l8-132M208 458l8-132M296 326l8 132M458 208l-132 8M326 296l132 8M54 208l132 8M186 296l-132 8"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32px"
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
export class SiHelpBuoyOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 512 512');
}
