import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siSzFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#ffda44"
        d="m0 145 256-21 256 21v33l-37 79 37 77v33l-256 24L0 367v-33l38-77-38-79z"
      />
      <svg:path fill="#0052b4" d="M0 0h512v145H0zm0 367h512v145H0z" />
      <svg:path fill="#a2001d" d="M0 178h512v156H0z" />
      <svg:path fill="#ffda44" d="M89 245h334v22H89zm45-45h245v23H134z" />
      <svg:path
        fill="#eee"
        d="m256 189-18 65 18 69c67 0 124-67 124-67s-57-67-124-67"
      />
      <svg:path fill="#333" d="M256 323c-67 0-124-67-124-67s57-67 124-67" />
      <svg:path fill="#eee" d="M212 234h22v44h-22z" />
      <svg:path fill="#333" d="M279 234h22v44h-23z" />
      <svg:circle cx="89" cy="256" r="22.3" fill="#0052b4" />
      <svg:circle cx="423" cy="256" r="22.3" fill="#0052b4" />
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
export class SiSzFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
