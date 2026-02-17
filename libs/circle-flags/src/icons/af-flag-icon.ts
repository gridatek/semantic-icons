import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siAfFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="M145 0h222l32 256-32 256H145l-32-256Z" />
      <svg:path fill="#496e2d" d="M367 0h145v512H367Z" />
      <svg:path fill="#333" d="M0 0h145v512H0Z" />
      <svg:path
        fill="#ffda44"
        d="M256 167a89 89 0 0 0 0 178 89 89 0 0 0 0-178m0 33a56 56 0 0 1 0 112 56 56 0 0 1 0-112m0 28.5c-12 0-22 10-22 22v33h44v-33c0-12-10-22-22-22"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAfFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
