import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-logstash-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Logstash</title>
      <path
        d="M13.745 24h8.291v-9.164h-8.29zm-2.618 0h.437v-9.164h-9.6A9.163 9.163 0 0011.127 24m.438-9.164h-9.6V0h.873a8.727 8.727 0 018.727 8.727z"
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
export class SvgLogstashIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
