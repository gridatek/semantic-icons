import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siBedSharpIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M432 224V96a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v128a48 48 0 0 0-48 48v160h36v-32h376v32h36V272a48 48 0 0 0-48-48m-192 0H120v-32a16 16 0 0 1 16-16h88a16 16 0 0 1 16 16Zm32-32a16 16 0 0 1 16-16h88a16 16 0 0 1 16 16v32H272Z"
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
export class SiBedSharpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 512 512');
}
