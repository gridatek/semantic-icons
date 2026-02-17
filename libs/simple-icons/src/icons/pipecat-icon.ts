import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siPipecatIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Pipecat</svg:title>
    <svg:path
      d="M3.309 5.116a.87.87 0 0 1 .958.24L7.369 8.89h9.262l3.102-3.536a.867.867 0 0 1 1.52.573v7.807H24v1.735h-4.482V8.232l-1.842 2.099a.87.87 0 0 1-.652.295H6.976a.87.87 0 0 1-.652-.295l-1.842-2.1v7.239H0v-1.735h2.747V5.928c0-.362.224-.685.562-.812m16.209 12.089H24v1.735h-4.482zM0 17.205h4.482v1.735H0zm9.253-2.892a1.157 1.157 0 1 1-2.314 0 1.157 1.157 0 0 1 2.314 0m7.807 0a1.157 1.157 0 1 1-2.313 0 1.157 1.157 0 0 1 2.313 0"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "Pipecat icon"',
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
    'data-slot': 'icon',
    'data-brand-color': '#000000',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPipecatIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
