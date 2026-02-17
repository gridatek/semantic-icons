import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siAuActFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M0 0h170l64 256-64 256H0Z" />
      <svg:path fill="#ffda44" d="M170 0h342v512H170Z" />
      <svg:path
        fill="#eee"
        d="m375 200-32 34 32 34h26a17 17 0 0 0 17-17 17 17 0 0 0 17-17 17 17 0 0 0 17-17h-51a17 17 0 0 0-17-17z"
      />
      <svg:path
        fill="#0052b4"
        d="M276 200a17 17 0 0 0-17 17h-51a17 17 0 0 0 17 17 17 17 0 0 0 17 17 17 17 0 0 0 17 17h27c0 34 44 44 44 44s45-10 45-44v-68h-89z"
      />
      <svg:path
        fill="#eee"
        d="m136 189 7 15 16-4-7 15 12 10-15 3v17l-13-11-13 11v-17l-16-3 13-10-7-15 16 4zm-45-43 7 15 16-4-7 15 12 10-15 3v17l-13-11-13 11v-17l-16-3 13-10-7-15 16 4zm19 92 6 17h17l-14 11 5 17-14-11-14 11 5-17-14-11h18zm-70-34 7 15 16-4-7 15 12 10-16 3v17l-12-11-13 11v-17l-16-3 13-10-7-15 16 4zm51 99-6 17-17-8 8 17-17 6 17 6-8 17 17-8 6 17 6-17 17 8-8-17 17-6-17-6 8-17-17 8zm207-98v9l21 8-21 7v9l32-12 32 12v-9l-21-8 21-7v-9l-32 12zm21 30v19h-6v-9h-15v39h64v-39h-15v9h-8v-19zm11 53a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9"
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
export class SiAuActFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
