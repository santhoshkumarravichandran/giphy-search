import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchResultComponent } from './search-result.component';
import { SearchBoxComponent } from '../search-box/search-box.component';

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;
  let leftArrowButton: HTMLInputElement;
  let rightArrowButton: HTMLInputElement;
  let keyword: HTMLElement;
  let totalSearchResult: HTMLElement;
  let searchComponent: ComponentFixture<SearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultComponent, SearchBoxComponent ],
      imports: [FormsModule, HttpClientTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SearchResultComponent);
    searchComponent = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('search keyword, result count, left and right pagination should display when search result is present', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const response = {
        images: {
          fixed_height_small: {
            url: 'some_value'
          }
        }
      };

      fixture.componentInstance.searchResults = [response];
      fixture.componentInstance.searchKeyword = 'apple';
      fixture.componentInstance.totalSearchResult = 100;
      fixture.detectChanges();


      leftArrowButton = fixture.debugElement.query(By.css('.left_button'))
        .nativeElement;
      rightArrowButton = fixture.debugElement.query(By.css('.right_button'))
        .nativeElement;
      keyword = fixture.debugElement.query(By.css('.keyword')).nativeElement;
      totalSearchResult = fixture.debugElement.query(By.css('.result_count'))
         .nativeElement;


      expect(leftArrowButton).toBeDefined();
      expect(rightArrowButton).toBeDefined();
      expect(keyword).toBeDefined();
      expect(totalSearchResult).toBeDefined();

      expect(keyword.innerText).toEqual('apple');
      expect(totalSearchResult.innerText).toEqual('100 GIFs');
    });
  });


  it('previous paginator button should be disabled when offset is zero', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const response = {
        images: {
          fixed_height_small: {
            url: 'some_value'
          }
        }
      };

      fixture.componentInstance.searchResults = [response];
      fixture.componentInstance.offset = 0;
      fixture.detectChanges();

      leftArrowButton = fixture.debugElement.query(By.css('.left_button'))
        .nativeElement;
      expect(leftArrowButton).toBeDefined();
      expect(leftArrowButton.disabled).toBe(true);
    });
  });


  it('next paginator button should be disabled when offset is zero', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const response = {
        images: {
          fixed_height_small: {
            url: 'some_value'
          }
        }
      };

      fixture.componentInstance.searchResults = [response];
      fixture.componentInstance.offset = 76;
      fixture.componentInstance.totalSearchResult = 100;
      fixture.detectChanges();

      rightArrowButton = fixture.debugElement.query(By.css('.right_button'))
        .nativeElement;
      expect(rightArrowButton).toBeDefined();
      expect(rightArrowButton.disabled).toBe(true);
    });
  });

});
