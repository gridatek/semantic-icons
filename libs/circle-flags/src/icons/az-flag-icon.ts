import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-az-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="m0 167 256-32 256 32v178l-256 32L0 345Z" />
      <svg:path fill="#338af3" d="M0 0h512v167H0Z" />
      <svg:path fill="#6da544" d="M0 345h512v167H0Z" />
      <svg:path
        fill="#eee"
        d="M229 167a89 89 0 1 0 67 153 72 72 0 0 1-34 8 72 72 0 1 1 34-136 89 89 0 0 0-67-25m88 39-9 27-26-12 12 25-27 10 27 10-12 25 26-12 9 27 10-27 26 12-13-25 27-10-27-10 13-25-26 12z"
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
export class SiAzFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
