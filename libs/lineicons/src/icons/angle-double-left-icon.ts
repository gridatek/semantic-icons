import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-angle-double-left-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.7335 6.78033C14.0263 6.48744 14.0263 6.01256 13.7335 5.71967C13.4406 5.42678 12.9657 5.42678 12.6728 5.71967L6.42279 11.9697C6.1299 12.2626 6.1299 12.7374 6.42279 13.0303L12.6728 19.2803C12.9657 19.5732 13.4406 19.5732 13.7335 19.2803C14.0263 18.9874 14.0263 18.5126 13.7335 18.2197L8.01379 12.5L13.7335 6.78033Z"
      fill="#323544"
    />
    <svg:path
      d="M18.2335 6.78033C18.5263 6.48744 18.5263 6.01256 18.2335 5.71967C17.9406 5.42678 17.4657 5.42678 17.1728 5.71967L10.9228 11.9697C10.6299 12.2626 10.6299 12.7374 10.9228 13.0303L17.1728 19.2803C17.4657 19.5732 17.9406 19.5732 18.2335 19.2803C18.5263 18.9874 18.5263 18.5126 18.2335 18.2197L12.5138 12.5L18.2335 6.78033Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAngleDoubleLeftIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
