import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siDzFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#496e2d" d="M0 0h256l32 256-32 256H0Z" />
      <svg:path fill="#eee" d="M256 0h256v512H256z" />
      <svg:path
        fill="#d80027"
        d="M245 167a89 89 0 1 0 67 153 72 72 0 0 1-35 8 72 72 0 1 1 35-136 89 89 0 0 0-67-25m66 40-21 29-34-11 21 29-21 29 34-11 21 29v-36l34-11-34-11z"
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
export class SiDzFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | string>(true);

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
