import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-opencontainersinitiative-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Open Containers Initiative</title>
      <path
        d="M0 0v24h24V0zm20.547 20.431H3.448V3.573h17.104V20.43zm-5.155-9.979h3.436v8.255h-3.436zm0-5.16h3.436v3.436h-3.436zm-6.789 9.976V8.732h5.074v-3.44H5.164v13.415h8.513v-3.44Z"
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
export class SvgOpencontainersinitiativeIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
