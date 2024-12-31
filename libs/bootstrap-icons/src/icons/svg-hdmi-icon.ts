import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hdmi-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-hdmi"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M2.5 7a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z" />
      <path
        d="M1 5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h.293l.707.707a1 1 0 0 0 .707.293h10.586a1 1 0 0 0 .707-.293l.707-.707H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm0 1h14v3h-.293a1 1 0 0 0-.707.293l-.707.707H2.707L2 9.293A1 1 0 0 0 1.293 9H1z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgHdmiIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
