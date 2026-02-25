import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siSxFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="M0 0h512v256l-288 32Z" />
      <svg:path fill="#0052b4" d="M224 256h288v256H0Z" />
      <svg:path fill="#eee" d="M0 0v512l256-256z" />
      <svg:path
        fill="#ffda44"
        d="M100 178a22 22 0 0 0-22 22 22 22 0 0 0 22 23 22 22 0 0 0 23-23 22 22 0 0 0-23-22m-72 78v6a72 72 0 1 0 144-6z"
      />
      <svg:path
        fill="#d80027"
        d="M50 195v72c0 38 50 50 50 50s50-12 50-50v-72z"
      />
      <svg:path
        fill="#338af3"
        d="M100 294c-9-3-28-12-28-27v-50h56v50c0 15-19 24-28 27"
      />
      <svg:path fill="#eee" d="M111 245v-11l-11-6-11 6v11l-5 6v22h33v-22z" />
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
export class SiSxFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | string>(true);

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
