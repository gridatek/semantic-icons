import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siAwaitIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Await</svg:title>
    <svg:path
      d="M12 0c5.523 0 10 4.477 10 10v9a3.125 3.125 0 0 1-4.694 2.703A3.126 3.126 0 0 1 12 23a3.126 3.126 0 0 1-5.306-1.297A3.125 3.125 0 0 1 2 19v-9C2 4.477 6.477 0 12 0m-1.25 10.625a.625.625 0 0 0-.625.625 1.875 1.875 0 0 0 3.75 0 .625.625 0 0 0-.625-.625zm-1.875-5c-.69 0-1.25.56-1.25 1.25v1.25a1.25 1.25 0 0 0 2.5 0v-1.25c0-.69-.56-1.25-1.25-1.25m6.25 0c-.69 0-1.25.56-1.25 1.25v1.25a1.25 1.25 0 0 0 2.5 0v-1.25c0-.69-.56-1.25-1.25-1.25"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#7858F5',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAwaitIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>('Await icon');
  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#7858F5');
}
