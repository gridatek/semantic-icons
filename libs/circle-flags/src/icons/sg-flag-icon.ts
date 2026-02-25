import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siSgFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="M0 0h512v256l-256 32L0 256Z" />
      <svg:path
        fill="#eee"
        d="M200 56a78 78 0 1 0 17 154 78 78 0 0 1 0-152q-8-2-17-2m56 5-5 17h-18l14 11-5 17 14-11 15 11-6-17 15-11h-18zm-43 34-6 17h-18l15 10-6 17 15-10 14 10-5-17 14-10h-18zm86 0-5 17h-18l14 10-5 17 14-10 15 10-6-17 15-10h-18zm-70 50-5 17h-18l14 10-5 17 14-10 15 10-6-17 15-10h-18zm54 0-6 17h-18l15 10-6 17 15-10 14 10-5-17 14-10h-18ZM0 256v256h512V256Z"
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
export class SiSgFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | string>(true);

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
