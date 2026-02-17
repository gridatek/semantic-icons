import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siLyFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#333" d="m0 144 256-32 256 32v224l-256 32L0 368Z" />
      <svg:path fill="#d80027" d="M0 0h512v144H0Z" />
      <svg:path fill="#496e2d" d="M0 368h512v144H0Z" />
      <svg:path
        fill="#eee"
        d="M226 167a89 89 0 1 0 67 153 72 72 0 0 1-35 8 72 72 0 1 1 35-136 89 89 0 0 0-67-25m90 42v36l-34 11 34 11v36l21-29 34 11-21-29 21-29-34 11z"
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
export class SiLyFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
