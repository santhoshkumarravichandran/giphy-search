import { TestBed } from '@angular/core/testing';

import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { GiphySearchService } from './giphy-search.service';
import { GIF_API_ENDPOINT, API_KEY } from '../constant';

describe('GiphySearch', () => {
  let service: GiphySearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [GiphySearchService]
    });
    service = TestBed.get(GiphySearchService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should do a get call to api with right search query and offset', () => {
    const searchKeyword = 'apple';
    const offset = 0;
    service.getGIFs(searchKeyword, offset).subscribe();

    const request = httpMock.expectOne(
      `${GIF_API_ENDPOINT}?apiKey=${API_KEY}&q=${searchKeyword}&offset=${offset}`
    );
    expect(request.request.method).toBe('GET');
    httpMock.verify();
  });
});
