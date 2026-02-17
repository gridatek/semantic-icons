import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siViFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="M0 0h512v512H0z" />
      <svg:path
        fill="#338af3"
        d="m62 258 30 84 30-84h23l-44 111H83L39 258zm350 111V258h22v111z"
      />
      <svg:path
        fill="#ffda44"
        d="M253 138c-23 1-41 20-41 43h-95c0 24 20 43 44 43h-1c0 24 19 43 42 43l35 38-27 60a122 122 0 0 0 92 0l-27-60 35-38c23 0 42-19 42-43h-1c24 0 44-19 44-43h-96c0-25-21-45-46-43"
      />
      <svg:path
        fill="#eee"
        d="m256 222-56 16v39a49 49 0 0 0 23 40l11-2 11 14 11 4 11-4 9-14 13 2a49 49 0 0 0 23-40v-39z"
      />
      <svg:path fill="#d80027" d="M223 222v95l22 12V222zm66 0v95l-22 12V222z" />
      <svg:path fill="#0052b4" d="M200 202h112v36H200z" />
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
export class SiViFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
