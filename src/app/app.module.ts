import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocSearchComponent } from './loc-search/loc-search.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { WeekWeatherComponent } from './week-weather/week-weather.component';

@NgModule({
  declarations: [AppComponent, LocSearchComponent, NavbarComponent, DataDisplayComponent, WeekWeatherComponent],
  imports: [
    BrowserModule,
    FormsModule,
    // Import HttpClientModule after BrowserModule
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
