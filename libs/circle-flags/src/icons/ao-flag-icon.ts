import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ao-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="M0 0h512v256l-256 32L0 256Z" />
      <svg:path fill="#333" d="M0 256h512v256H0z" />
      <svg:path
        fill="#ffda44"
        d="M256 128v33a94 94 0 0 1 47 13 95 95 0 0 1 23 138l-144-78a33 33 0 0 0 13 45l104 57a95 95 0 0 1-90 2 94 94 0 0 1-32-30l-28 18a128 128 0 0 0 160 46l5 4 29 16a28 28 0 0 0 38-11l16-30-37-20 7-11a128 128 0 0 0-47-175 127 127 0 0 0-64-17m0 50-8 26h-27l22 15-9 26 22-16 22 16-9-26 22-16h-27z"
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
export class SiAoFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
