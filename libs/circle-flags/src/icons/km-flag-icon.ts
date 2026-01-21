import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-km-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#ffda44" d="M96 128h416V0H0Z" />
      <svg:path fill="#eee" d="M96 128h416v128l-288 32Z" />
      <svg:path fill="#d80027" d="M512 256H224L64 416l448-32z" />
      <svg:path fill="#0052b4" d="M96 384 0 511l512 1V384Z" />
      <svg:path fill="#6da544" d="M0 0v512l256-256Z" />
      <svg:path
        fill="#eee"
        d="M112 177a78 78 0 1 0 17 154 78 78 0 0 1-61-76 78 78 0 0 1 61-76zm16 12-4 12h-14l11 8-4 13 11-8 11 8-4-13 10-8h-13zm0 33-4 13h-14l11 8-4 12 11-8 11 8-4-12 10-8h-13zm0 33-4 13h-14l11 8-4 13 11-8 11 8-4-13 10-8h-13zm0 34-4 12h-14l11 8-4 13 11-8 11 8-4-13 10-8h-13z"
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
export class SiKmFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
