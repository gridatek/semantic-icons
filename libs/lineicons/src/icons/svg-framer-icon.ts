import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-framer-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6663 2V8.66667H11.9997L5.33301 2H18.6663ZM5.33301 8.66667H11.9997L18.6663 15.3333H11.9997V22L5.33301 15.3333V8.66667Z"
        fill="#323544"
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
export class SvgFramerIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
