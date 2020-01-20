import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatNativeDateModule, MatPaginatorModule } from '@angular/material';

import { AppComponent } from './search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  declarations: [AppComponent, SearchBoxComponent, SearchResultComponent],
  exports: [SearchResultComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatNativeDateModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
