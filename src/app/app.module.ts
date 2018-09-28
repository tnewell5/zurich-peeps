import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { PapaParseModule } from 'ngx-papaparse';

import { AppComponent } from './app.component';
import { CountryOfOriginComponent } from './country-of-origin/country-of-origin.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryOfOriginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    PapaParseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
