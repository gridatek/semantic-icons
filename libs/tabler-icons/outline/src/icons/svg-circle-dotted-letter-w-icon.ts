import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-circle-dotted-letter-w-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-circle-dotted-letter-w"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 8l1 8l2 -5l2 5l1 -8" />
      <path d="M7.5 4.21v.01" />
      <path d="M4.21 7.5v.01" />
      <path d="M3 12v.01" />
      <path d="M4.21 16.5v.01" />
      <path d="M7.5 19.79v.01" />
      <path d="M12 21v.01" />
      <path d="M16.5 19.79v.01" />
      <path d="M19.79 16.5v.01" />
      <path d="M21 12v.01" />
      <path d="M19.79 7.5v.01" />
      <path d="M16.5 4.21v.01" />
      <path d="M12 3v.01" />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCircleDottedLetterWIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
