import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nomad-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Nomad</title>
      <path
        d="m12.004 0-10.4 6v12l10.392 6 10.4-6V6L12.004 0zm4.639 13.204-2.77 1.6-3.347-1.832v3.826l-3.144 1.995V10.8L9.88 9.272l3.462 1.823V7.191l3.301-1.984v7.997z"
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
export class SvgNomadIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
