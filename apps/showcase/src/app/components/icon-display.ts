import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';

import { ScCodeViewer, ScCodeViewerContent } from '@semantic-components/code';
import {
  ScSheet,
  ScSheetClose,
  ScSheetPortal,
  ScSheetProvider,
} from '@semantic-components/ui';
import { SiXIcon } from '@semantic-icons/lucide-icons';
import { Icon } from '@semantic-icons/nx-generators';
import { Observable } from 'rxjs';

import { IconService } from '../services/icon.service';
import { SafeHtmlPipe } from './safe-html.pipe';

@Component({
  selector: 'app-icon-display',
  imports: [
    CommonModule,
    SafeHtmlPipe,
    ScCodeViewer,
    ScCodeViewerContent,
    ScSheetProvider,
    ScSheetPortal,
    ScSheet,
    ScSheetClose,
    SiXIcon,
  ],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Icon Grid -->
      <div class="bg-white shadow overflow-hidden rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">
            Available Icons
          </h3>

          @if ((icons$ | async)?.length === 0) {
            <div class="text-gray-500 text-center py-8">
              No icons found matching your search criteria.
            </div>
          }

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            @for (icon of icons$ | async; track icon) {
              <button
                class="p-3 border rounded-md cursor-pointer hover:bg-gray-50 flex flex-col items-center transition-colors"
                [class.bg-indigo-50]="selectedIcon?.id === icon.id"
                [class.border-indigo-500]="selectedIcon?.id === icon.id"
                (click)="selectIcon(icon)"
              >
                <div
                  class="h-12 w-12 flex items-center justify-center"
                  [innerHTML]="icon.svgContent | safeHtml"
                ></div>
                <div class="mt-2 text-xs text-center text-gray-700">
                  {{ icon.name }}
                </div>
              </button>
            }
          </div>
        </div>
      </div>

      <div [(open)]="sheetOpen" scSheetProvider side="right">
        <!-- Icon Details -->
        <ng-template scSheetPortal>
          <div class="w-[300px]" scSheet>
            <div class="max-h-screen overflow-y-auto">
              <button scSheetClose>
                <svg class="size-4" siXIcon></svg>
                <span class="sr-only">Close</span>
              </button>

              <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg font-medium text-gray-900 mb-4">
                  Icon Details
                </h3>

                @if (!selectedIcon) {
                  <div class="text-gray-500 text-center py-8">
                    Select an icon to view details
                  </div>
                }

                @if (selectedIcon) {
                  <div class="space-y-4">
                    <div class="flex items-center justify-center py-4">
                      <div
                        class="h-24 w-24"
                        [innerHTML]="selectedIcon.svgContent | safeHtml"
                      ></div>
                    </div>
                    <div>
                      <h4 class="text-sm font-medium text-gray-700">Name</h4>
                      <p class="mt-1 text-gray-900">{{ selectedIcon.name }}</p>
                    </div>
                    <div>
                      <h4 class="text-sm font-medium text-gray-700">Tags</h4>
                      <div class="mt-1 flex flex-wrap gap-2">
                        @for (tag of selectedIcon.tags; track tag) {
                          <span
                            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                          >
                            {{ tag }}
                          </span>
                        }
                      </div>
                    </div>
                    <div>
                      <h4 class="text-sm font-medium text-gray-700">
                        SVG Code
                      </h4>
                      <div scCodeViewer>
                        <div
                          [code]="selectedIcon.svgContent"
                          scCodeViewerContent
                          language="html"
                        ></div>
                      </div>
                    </div>
                    @if (selectedIcon.componentContent) {
                      <div>
                        <h4 class="text-sm font-medium text-gray-700">
                          Component Code
                        </h4>
                        <div scCodeViewer>
                          <div
                            [code]="selectedIcon.componentContent"
                            scCodeViewerContent
                            language="angular-ts"
                          ></div>
                        </div>
                      </div>
                    }
                  </div>
                }
              </div>
            </div>
          </div>
        </ng-template>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDisplay implements OnChanges {
  @Input() library = '';
  @Input() searchQuery = '';

  icons$: Observable<Icon[]>;
  selectedIcon: Icon | null = null;

  readonly sheetOpen = signal(false);

  private readonly iconService = inject(IconService);

  constructor() {
    this.icons$ = this.iconService.searchIcons('');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery'] || changes['library']) {
      this.icons$ = this.iconService.searchIcons(this.searchQuery);
      this.selectedIcon = null;
    }
  }

  selectIcon(icon: Icon): void {
    this.selectedIcon = icon;

    this.sheetOpen.set(true);
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(
      () => {
        alert('Copied to clipboard!');
      },
      (err) => {
        console.error('Could not copy text: ', err);
      },
    );
  }
}
