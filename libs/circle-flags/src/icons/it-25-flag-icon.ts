import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siIt25FlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#6da544" d="M0 0h512v512H0V0Z" />
      <svg:path
        fill="#eee"
        d="M253.9 161.3a62.7 62.7 0 1 1 71.5 30.3 33.7 33.7 0 1 0 25.3 62.3 62.7 62.7 0 1 1-30.3 71.5 33.7 33.7 0 1 0-62.3 25.3 62.7 62.7 0 1 1-71.5-30.3 33.7 33.7 0 1 0-25.3-62.3 62.7 62.7 0 1 1 30.3-71.5 33.7 33.7 0 1 0 62.3-25.3Z"
      />
    </svg:g>
  `,
  host: {
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIt25FlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
