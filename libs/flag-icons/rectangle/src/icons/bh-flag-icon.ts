import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siBhFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fff" d="M0 0h640v480H0" />
    <svg:path
      fill="#ce1126"
      d="M640 0H96l110.7 48L96 96l110.7 48L96 192l110.7 48L96 288l110.7 48L96 384l110.7 48L96 480h544"
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
export class SiBhFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 640 480');
}
