import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-the-storygraph-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>The StoryGraph</svg:title>
    <svg:path
      d="M18.1722.6246a.6788.6788 0 0 0-.1314.0252L14.095 1.818c-.3504.1039-.545.4673-.4413.8178l5.1137 17.3544c.104.3505.4673.5452.8178.4414l3.9455-1.1553c.3504-.1038.5451-.4673.4413-.8178L18.8584 1.0911a.6522.6522 0 0 0-.6862-.4665zM.662 1.0522c-.3634 0-.6619.2986-.6619.662v18.0944c0 .3634.2985.6619.662.6619h4.1143c.3634 0 .6619-.2985.6619-.662V1.7143c0-.3634-.2985-.662-.6619-.662zm6.9438 0c-.3634 0-.662.2986-.662.662v18.0944c0 .3634.2986.6619.662.6619H11.72c.3634 0 .649-.2985.662-.662V1.7143c0-.3634-.2986-.662-.662-.662zM.3634 21.431c-.1947 0-.3634.1558-.3634.3634v1.2202c0 .1948.1558.3635.3634.3635h23.2712c.1947 0 .3635-.1558.3635-.3635v-1.2202c0-.1947-.1557-.3634-.3635-.3634z"
    />
  `,
  host: {
    role: 'img',
    '[attr.aria-label]': 'ariaLabel() || "The StoryGraph icon"',
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
export class SiTheStorygraphIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  // Accessibility inputs
  readonly ariaLabel = input<string>();
  readonly ariaHidden = input<boolean | string>(false);

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
