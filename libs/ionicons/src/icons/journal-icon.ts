import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siJournalIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M290 32H144a64.07 64.07 0 0 0-64 64v320a64.07 64.07 0 0 0 64 64h146ZM368 32h-18v448h18a64.07 64.07 0 0 0 64-64V96a64.07 64.07 0 0 0-64-64"
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
export class SiJournalIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | string>(true);

  readonly viewBox = input<string>('0 0 512 512');
}
