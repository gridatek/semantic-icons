import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siMnFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#a2001d"
        d="M0 0h167l89 32 89-32h167v512H345l-89-32-89 32H0Z"
      />
      <svg:path fill="#0052b4" d="M167 0h178v512H167z" />
      <svg:path
        fill="#ffda44"
        d="m89 134-8 24H56l20 15-8 24 21-15 21 15-8-24 20-15H97zm0 66a11 11 0 0 0-11 12 11 11 0 0 0 11 11 11 11 0 0 0 11-11 11 11 0 0 0-11-12m-22 34v22h44v-22zm-34 22v89h23v-89zm89 0v89h23v-89zm-33 11a22 22 0 0 0-22 22 22 22 0 0 0 22 23 22 22 0 0 0 22-23 22 22 0 0 0-22-22m-22 56v22h44v-22z"
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
export class SiMnFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
