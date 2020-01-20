import { Component } from '@angular/core';

import { GiphySearchService } from '../../services/giphy-search.service';
import { BadWordFilter } from '../../services/utility/bad-word.filter';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  searchResult = [];
  searchKeyword = '';
  totalSearchResult = 0;
  offset = 0;
  cleanSearchKeyword = '';

  constructor(
    private gifSearchService: GiphySearchService,
    private badWordFilter: BadWordFilter
  ) {}

  /**
   * onSearch is triggered when user clicks on the search icon
   */
  onSearch(keyword: string): void {
   const query = this.badWordFilter.clean(keyword);
   if (query !== '') {
      this.retrieveGIFS(query, this.offset);
   }
  }

/**
 * passes query and offset to the service, retrieves
 * the giphies response and sets them to corresponding
 * fields
 */
  retrieveGIFS(query: string, offset: number = 0) {
    this.gifSearchService.getGIFs(query, offset).subscribe((res: any) => {
      this.searchResult = res.data;
      this.totalSearchResult = res.pagination.total_count;
      this.offset = res.pagination.offset;
      this.cleanSearchKeyword = query;
    });
  }

/**
 * update function is trigger when user clicks on the pagination link
 */
  update(offset: number): void {
    this.retrieveGIFS(this.searchKeyword, offset);
  }

  isSearched(): boolean {
    return this.searchResult.length > 0;
  }
}
