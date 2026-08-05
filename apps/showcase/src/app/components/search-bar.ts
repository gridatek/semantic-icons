import { Component, ViewEncapsulation, inject } from '@angular/core';
import { FieldTree, FormField, form } from '@angular/forms/signals';

import { IconService } from '../services/icon.service';

@Component({
  selector: 'app-search-bar',
  imports: [FormField],
  template: `
    <div class="mb-6">
      <label
        class="block text-sm font-medium text-gray-700 mb-2"
        for="icon-search"
      >
        Search Icons
      </label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input
          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-3 sm:text-sm border border-gray-300 rounded-md"
          id="icon-search"
          [formField]="searchForm.query"
          type="text"
          placeholder="Search by name or tag..."
        />
        @if (searchForm().value().query) {
          <button
            class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
            (click)="clearSearch()"
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        }
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class SearchBar {
  searchForm: FieldTree<{
    query: string;
  }>;

  constructor() {
    const iconsService = inject(IconService);
    this.searchForm = form(iconsService.searchQuery);
  }

  clearSearch(): void {
    this.searchForm().reset({ query: '' });
  }
}
