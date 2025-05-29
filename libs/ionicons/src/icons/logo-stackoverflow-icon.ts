import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-logo-stackoverflow-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M392 440V320h40v160H64V320h40v120Z" />
    <svg:path
      d="m149.1 308.77 198.57 40.87 8.4-39.32-198.57-40.87Zm26.27-93.12L359.22 300 376 263.76l-183.82-84.84Zm50.95-89 156 127.78 25.74-30.52-156-127.78ZM328 32l-33.39 23.8 120.82 160.37L448 192ZM144 400h204v-40H144Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLogoStackoverflowIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
