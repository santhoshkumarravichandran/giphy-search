import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { limit } from '../../constant';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  limit;
  @Input() searchResults = [];
  @Input() totalSearchResult;
  @Input() searchKeyword;
  @Input() offset;

  @Output() public update: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    this.limit = limit;
  }
  /**
   * when user clicks previous, reduce the offset limit
   */
  previous(): void {
    if (this.offset !== 0) {
      this.update.emit(this.offset - this.limit);
    }
  }

  /**
   * When the user clicks next, increment the offset
   */
  next(): void {
    // make sure offset does not cross the total search result
    const nextOffset = this.offset + this.limit;
    if (nextOffset < this.totalSearchResult) {
      this.update.emit(this.offset + this.limit);
    }
  }
}
