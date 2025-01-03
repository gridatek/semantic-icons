import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-it-52-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:mask
        id="a"
        width="512"
        height="512"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <svg:circle cx="256" cy="256" r="256" fill="#fff" />
      </svg:mask>
    </svg:defs>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="M0 0h512v512H0V0Z" />
      <svg:path fill="#d80027" d="M0 392h512v48.3H0zM0 79.7h512V128H0z" />
      <svg:path
        fill="#acabb1"
        d="M352 264v-8l-24-24h-24.2L288 200a8 8 0 0 0 8-8h16v-24h-40a8 8 0 0 0-8-8v16a8 8 0 0 0-8 8v30.1a23.9 23.9 0 0 0-16-6.1h-64a16 16 0 0 0 16 16 16 16 0 0 0 16 16 8 8 0 0 0 8 8h32a8 8 0 0 1-8 8h-8a24 24 0 0 0-24 24 24 24 0 0 0-24-24 16 16 0 0 0-16 16v16a8 8 0 0 1-8 8h8a16 16 0 0 0 16-16 8 8 0 1 1 16 0 8 8 0 0 0 8 8h1.4a24 24 0 0 0 22.6 16v8a16 16 0 0 0 16 16l16 16v8h8v-8l-24-24v-8a16 16 0 0 0 16 16l16 16v8h8v-8l-24-24v-21.2c13.9-2.5 27.2-9 38-19.6l.6-.6L328 264l16 16v8h8v-8l-24-24h-16c0-2.2-.2-4.3-.6-6.4L328 240l16 16v8h8Z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIt52FlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
  }
}
