import { Component } from '@angular/core';
import { WeatherDataService } from '../weather-data.services';

@Component({
  selector: 'app-loc-search',
  templateUrl: './loc-search.component.html',
  styleUrls: ['./loc-search.component.css'],
})
export class LocSearchComponent {
  loc: string;
  constructor(private weatherData: WeatherDataService) {}
  onClick(loc) {
    this.weatherData.setLocation(loc);
  }
}
