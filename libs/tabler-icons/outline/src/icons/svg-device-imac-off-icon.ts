import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-device-imac-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-device-imac-off"
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
      <path
        d="M7 3h13a1 1 0 0 1 1 1v12c0 .28 -.115 .532 -.3 .713m-3.7 .287h-13a1 1 0 0 1 -1 -1v-12c0 -.276 .112 -.526 .293 -.707"
      />
      <path d="M3 13h10m4 0h4" />
      <path d="M8 21h8" />
      <path d="M10 17l-.5 4" />
      <path d="M14 17l.5 4" />
      <path d="M3 3l18 18" />
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
export class SvgDeviceImacOffIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
