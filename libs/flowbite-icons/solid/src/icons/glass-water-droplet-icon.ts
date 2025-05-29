import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-glass-water-droplet-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      d="M12 6c-.268 0-.4602.10529-.5254.14309-.0858.0497-.1506.10275-.1893.13652-.0789.06896-.1458.1435-.1939.20022-.1011.11923-.2104.26866-.3176.42564-.2184.31962-.4786.74423-.7284 1.19853-.24933.4535-.49952.9569-.69038 1.43273C9.17832 9.97724 9 10.5183 9 11c0 1.6569 1.3431 3 3 3s3-1.3431 3-3c0-.4817-.1783-1.02276-.355-1.46327-.1909-.47583-.4411-.97923-.6904-1.43273-.2498-.4543-.5099-.87891-.7284-1.19853-.1072-.15698-.2165-.30641-.3176-.42564-.0481-.05672-.1149-.13126-.1939-.20022-.0387-.03377-.1035-.08682-.1892-.13652C12.4602 6.10529 12.268 6 12 6Z"
    />
    <svg:path
      fill="currentColor"
      fill-rule="evenodd"
      d="M6 2c-.27677 0-.54116.11471-.73024.31682-.18909.20211-.28595.47354-.26754.7497L6.07775 19.1996C6.18281 20.7755 7.49172 22 9.07111 22h5.85779c1.5794 0 2.8883-1.2246 2.9934-2.8004l1.0755-16.13308c.0184-.27616-.0785-.54759-.2676-.7497C18.5412 2.11471 18.2768 2 18 2H6Zm1.86889 14-.8-12h9.86221l-.8 12H7.86889Z"
      clip-rule="evenodd"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGlassWaterDropletIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
