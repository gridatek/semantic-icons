import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siArtsakhFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="m0 171 256-32 256 32v170l-256 32L0 341Z" />
      <svg:path fill="#d80027" d="M0 0h512v171H0Z" />
      <svg:path fill="#ff9811" d="M0 341h512v171H0Z" />
      <svg:path
        fill="#eee"
        d="M428 0v57h-43v57h-43v57h-43v57h-43v56h43v57h43v57h43v57h43v57h84v-57h-41v-57h-43v-57h-43v-57h-43v-56h43v-57h43v-57h43V57h41V0z"
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
export class SiArtsakhFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
