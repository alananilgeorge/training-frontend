import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListMatchesComponent } from './list-matches/list-matches.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FilterTabComponent } from './filter-tab/filter-tab.component';
import { DatePipe } from '@angular/common';
import { RelatedComponent } from './related/related.component';

import { SanitizeUrlPipe } from './sanitize-url.pipe';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { ViewMatchComponent } from './view-match/view-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListMatchesComponent,
    FilterTabComponent,
    RelatedComponent,
    SanitizeHtmlPipe,
    SanitizeUrlPipe,
    ViewMatchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [DatePipe, SanitizeHtmlPipe, SanitizeUrlPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
