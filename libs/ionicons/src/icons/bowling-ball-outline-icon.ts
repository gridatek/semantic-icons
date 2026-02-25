import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siBowlingBallOutlineIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle
      cx="256"
      cy="256"
      r="208"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <svg:circle cx="288" cy="200" r="24" fill="currentColor" />
    <svg:circle cx="296" cy="128" r="24" fill="currentColor" />
    <svg:circle cx="360" cy="168" r="24" fill="currentColor" />
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
export class SiBowlingBallOutlineIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 512 512');
}
