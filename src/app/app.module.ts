import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/AppRoutingModule';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { FilterDropdownComponent } from './filter-dropdown/filter-dropdown.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { MovieDetailsPageComponent } from './views/movie-details-page/movie-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieComponent,
    MoviesComponent,
    FilterDropdownComponent,
    HomePageComponent,
    MovieDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
