import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-wine-glass-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      fill-rule="evenodd"
      d="M8.5 2c-.42794 0-.80845.2723-.94652.67736-.03443.10101-.07815.2268-.12882.3726-.1952.56172-.4936 1.42039-.76192 2.30283C6.33766 6.42192 6 7.69926 6 8.57072c0 .10149.00259.20301.00772.30444C6.00262 8.91606 6 8.95772 6 9c0 .10098.01497.19846.0428.29034C6.35415 11.9216 8.33422 14.4001 11 14.9062V20H9c-.55228 0-1 .4477-1 1s.44772 1 1 1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2v-5.0938c2.908-.552 5-3.4513 5-6.33548 0-.86275-.3278-2.12695-.6497-3.1952-.3348-1.11124-.7167-2.17674-.9075-2.70901l-.0015-.00395C16.2989 2.26514 15.9222 2 15.5 2h-7Zm-.44291 6h7.88661c-.088-.54205-.2729-1.26599-.5084-2.0475-.2149-.71327-.4515-1.41069-.6413-1.9525H9.21208c-.18553.53611-.41939 1.22278-.63584 1.93462C8.33663 6.72266 8.14708 7.4535 8.05709 8Z"
      clip-rule="evenodd"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWineGlassIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
