import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GIFType } from './interface';
import { GIF_API_ENDPOINT, API_KEY } from '../constant';

@Injectable({
  providedIn: 'root'
})

export class GiphySearchService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getGIFs(keyword: string, offset: number): Observable<GIFType> {
    const apiUrl = `${GIF_API_ENDPOINT}?apiKey=${API_KEY}&q=${keyword}&offset=${offset}`;
    return this.http
      .get<GIFType>(apiUrl)
      .pipe(catchError(this.handleError<GIFType>()));
  }
}
