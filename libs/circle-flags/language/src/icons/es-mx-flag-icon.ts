import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[siEsMxFlagIcon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="m384 512 32-192-32-192-160 96-96 160-32 64 32 64z"
      />
      <svg:path fill="#ffda44" d="m0 128 192-32 192 32-256 256-64 32-64-32Z" />
      <svg:path d="M122 508h172m-172 24h28m116 0h28" />
      <svg:path fill="none" d="M220 284v12q1 11 12 12 11-1 12-12v-12z" />
      <svg:path
        fill="#496e2d"
        d="M348 305a5 5 0 0 0-5 5 87 87 0 0 1-169 28l-8 8a97 97 0 0 0 187-36 5 5 0 0 0-5-5m-220 79L0 512h128z"
      />
      <svg:path
        fill="#eee"
        d="M196 168q-10 1-15 11l-5-1q-15 1-16 16c-1 15 7 16 16 16q11 0 15-11a16 16 0 0 0 17-4 16 16 0 0 0 17 4 16 16 0 1 0 10-20 16 16 0 0 0-27-5q-4-6-12-6m0 8q8 1 8 8 0 8-8 8-7 0-8-8 1-7 8-8m24 0q8 1 8 8 0 8-8 8-7 0-8-8 1-7 8-8m-44 10 4 1 4 8q-1 7-8 7-9 0-8-8 1-7 8-8m64 0q8 1 8 8 0 8-8 8-7 0-8-7l4-8zm-112 38v80h16v-80zm80 0v40c-26 0-48 14-48 32q2 21 27 29l69-69v-32zm64 0v16l16-16z"
      />
      <svg:path fill="#ff9811" d="M200 160h16v32h-16z" />
      <svg:path
        fill="#d80027"
        d="M0 0v128h384v384h128V0zm208 184c-22 0-40 11-40 24l8 8h64l8-8c0-13-18-24-40-24m-72 8q-7 1-8 8v8a8 8 0 1 0 16 0v-8q-1-7-8-8m144 0q-7 1-8 8v8a8 8 0 1 0 16 0v-8q-1-7-8-8m-120 32v24h-38a4 4 0 1 0 0 8h38v40a24 24 0 0 0 34 22l12-12 2-10 1 7 31-31h-32v-48zm72 8q-9 1-10 10v12a10 10 0 1 0 20 0v-12q0-9-10-10m24 16v8l8-8zm-134 24a4 4 0 1 0 0 8h28a4 4 0 1 0 0-8zM0 384v128l128-128z"
      />
      <svg:path
        fill="#ffda44"
        d="M186 196a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6m22 0a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6m22 0a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6"
      />
      <svg:path
        fill="#ff9811"
        d="M128 208a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16zm144 0a8 8 0 0 0 0 16h16l8-8a8 8 0 0 0-8-8zm-96 8v8h64v-8zm-8 16v8h8v16h-8v8h32v-8h-8v-16h8v-8zm-8 40v24q2 12 9 19v-43zm19 0v47h10v-47zm20 0v41l7-7 2-10v-24zm-71 32a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16z"
      />
      <svg:path
        fill="#338af3"
        d="M208 256a16 16 0 0 0 0 32 16 16 0 0 0 0-32m-80 64a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16zm94 44-6 9a70 70 0 0 0 81 0l-7-9a64 64 0 0 1-68 0"
      />
      <svg:path
        fill="#751a46"
        d="m268 244-5 5c13 11 5 28 4 29l-2-4q-2-11-9-18l-14 14q3 3 3 8-11 12-4 26l4 8-13 23 29-7 18 18v-11l11 11 23-11-35-21-2-13c22-2 34 4 51 29 8-77-37-85-59-86"
      />
      <svg:path
        fill="#6da544"
        d="m234 278-21 21-1 4q3 11 12 15c2 2 7 4 5 7q-4 2-9-2-10-4-16-15l-7 7q7 9 16 16 9 8 20 3 10-6 4-17c-3-6-11-8-14-14-2-3 2-4 4-6q8-4 9-11z"
      />
      <svg:path
        fill="#496e2d"
        d="m199 330-4 1q-3 4 1 8 23 21 54 24v17h12v-17q31-3 54-24 4-4 1-8-4-3-8 0a78 78 0 0 1-106 0z"
      />
      <svg:rect
        width="34"
        height="22"
        x="239"
        y="369"
        fill="#ff9811"
        rx="11"
        ry="11"
      />
      <svg:path
        fill="#ffda44"
        d="M341 335a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10m-165 1-13 13a10 10 0 0 0 9 6 10 10 0 0 0 10-10 10 10 0 0 0-6-9m96 3-16 8v5l15-1 4-9zm-83 23a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10m135 0a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10m-108 21a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10m81 0a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10"
      />
    </svg:g>
  `,
  host: {
    '[attr.aria-hidden]': 'ariaHidden()',
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEsMxFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly ariaHidden = input<boolean | 'true' | 'false'>(true);

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
