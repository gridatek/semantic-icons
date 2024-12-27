import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-libreofficewriter-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LibreOffice Writer</title>
      <path
        d="M22 0v7l-7-7h7zm0 9v12c0 1.662-1.338 3-3 3H5c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3h8l9 9zM6 10h5V9H6v1zm0 2h5v-1H6v1zm0 2h5v-1H6v1zm5 3H6v1h5v-1zm7-2H6v1h12v-1zm0-6h-6v5h6V9zm-1.5 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM14 11l-1 2h3l-2-2z"
      />
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
export class SvgLibreofficewriterIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
