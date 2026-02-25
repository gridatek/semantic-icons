import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siLogoAngularIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M213.57 256h84.85l-42.43-89.36z" />
    <svg:path
      d="M256 32 32 112l46.12 272L256 480l177.75-96L480 112Zm88 320-26.59-56H194.58L168 352h-40L256 72l128 280Z"
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
export class SiLogoAngularIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 512 512');
}
