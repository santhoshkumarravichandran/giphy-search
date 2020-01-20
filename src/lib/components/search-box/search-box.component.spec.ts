import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { SearchBoxComponent } from './search-box.component';
import { SearchResultComponent } from '../search-result/search-result.component';
describe('SearchBarComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;
  let searchKeyword: HTMLInputElement;
  let searchButton: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBoxComponent, SearchResultComponent],
      imports: [FormsModule, HttpClientTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    searchKeyword = fixture.debugElement.query(By.css('.searchInput')).nativeElement;
    searchButton = fixture.debugElement.query(By.css('.searchButton'))
      .nativeElement;
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('search button should be not disabled if search keyword is filled', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      searchKeyword.value = 'apple';
      searchKeyword.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(searchButton.disabled).toBe(false);
    });
  });
});
