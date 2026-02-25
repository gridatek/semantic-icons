import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siWebAwesomeIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Web Awesome</svg:title>
    <svg:path
      d="M13.958 4.95c0 .783-.465 1.462-1.132 1.77L16.8 10.2l3.914-.784A1.8 1.8 0 0 1 20.4 8.4a1.8 1.8 0 1 1 1.86 1.8l-4.221 9.385A2.4 2.4 0 0 1 15.849 21H8.153c-.945 0-1.8-.555-2.19-1.414l-4.221-9.384a1.8 1.8 0 1 1 1.545-.784L7.2 10.2l3.98-3.484a1.95 1.95 0 0 1-1.125-1.766 1.95 1.95 0 0 1 3.9 0z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Web Awesome icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#F36944',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWebAwesomeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#F36944');
}
