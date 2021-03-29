import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.services';

@Component({
  selector: 'app-week-weather',
  templateUrl: './week-weather.component.html',
  styleUrls: ['./week-weather.component.css'],
})
export class WeekWeatherComponent implements OnInit {
  selectedLoc;
  dataObj;
  date;
  currentDayIdx;
  arr = [];
  weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  constructor(private weatherData: WeatherDataService) {}

  ngOnInit(): void {
    this.weatherData.currentLoc.subscribe((res) => {
      this.selectedLoc = res;
      this.weatherApiCall();
    });
  }
  weatherApiCall() {
    this.weatherData.getData(this.selectedLoc).subscribe((data) => {
      this.dataObj = data;
      this.date = new Date(this.dataObj.location.localtime);
      this.currentDayIdx = this.date.getDay();
    });
  }

  getWeekDay() {
    if (this.currentDayIdx === this.weekDays.length - 1) {
      this.currentDayIdx = 0;
    } else {
      this.currentDayIdx++;
    }
    return this.weekDays[this.currentDayIdx];
  }
}
