import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-campaignmonitor-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Campaign Monitor</title>
      <path
        d="M23.836 4.27c-.29-.413-.86-.515-1.273-.226L.163 19.73c.167.235.437.39.747.39h22.18c.503 0 .91-.41.91-.914V4.78c-.004-.176-.058-.352-.164-.51zm-22.4-.226c-.413-.29-.982-.19-1.272.226-.107.154-.162.332-.164.51v14.45l10.664-8.736-9.227-6.45v-.002z"
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
export class SvgCampaignmonitorIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
