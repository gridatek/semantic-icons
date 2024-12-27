import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-automatic-gearbox-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-automatic-gearbox"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M18 16a3 3 0 0 1 0 6h-1a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1zm0 4l.117 -.007a1 1 0 0 0 -.117 -1.993zm.5 -13a2.5 2.5 0 1 1 0 5h-.5v1a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1zm-.5 3h.5a.5 .5 0 1 0 0 -1h-.5zm-5 0a1 1 0 0 1 0 2h-3v6h3a1 1 0 0 1 0 2h-3a2 2 0 0 1 -2 -2v-6h-2a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-2.17a3 3 0 0 1 -2 -2.83l.005 -.176a3 3 0 1 1 3.996 3.005l-.001 2.171z"
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
export class SvgAutomaticGearboxIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
