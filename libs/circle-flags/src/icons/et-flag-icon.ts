import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siEtFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="m0 345 256-32 256 32v167H0Z" />
      <svg:path fill="#ffda44" d="m0 167 256-32 256 32v178H0Z" />
      <svg:path fill="#6da544" d="M0 0h512v167H0z" />
      <svg:circle cx="256" cy="256" r="123" fill="#0052b4" />
      <svg:path
        fill="#ffda44"
        d="m256 161-17 53-26-37-18 13 28 39h-61l43 32-37 12 7 21 42-14-19 59 47-34v40h22v-40l47 35-19-60 42 14 7-21-38-12 44-32h-61l28-38-18-13-26 36z"
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
export class SiEtFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
