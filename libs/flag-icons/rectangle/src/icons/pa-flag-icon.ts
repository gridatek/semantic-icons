import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPaFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fff" d="M0 0h640v480H0z" />
    <svg:path fill="#db0000" d="M323 0h358v225.3H323z" />
    <svg:path fill="#0000ab" d="M0 225.3h323.1V480H0z" />
    <svg:path
      fill="#0000ab"
      fill-rule="evenodd"
      d="m214.8 177.7-42-29.4-41.7 29.6 15.5-48L105 100l51.6-.4 16-48 16.3 47.9h51.6l-41.5 30 15.9 48z"
    />
    <svg:path
      fill="#d80000"
      fill-rule="evenodd"
      d="m516.9 413.9-42.4-27.7-42.1 28 15.6-45.6-42-28 52-.5 16.2-45.4 16.4 45.3h52l-41.8 28.5 16 45.4z"
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
export class SiPaFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 640 480');
}
