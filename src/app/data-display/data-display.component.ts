import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.services';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
})
export class DataDisplayComponent implements OnInit {
  dataObj: any;
  dir: string;
  selectedLoc: string;

  constructor(private weatherData: WeatherDataService) {}

  ngOnInit(): void {
    this.weatherData.currentLoc.subscribe((res) => {
      this.selectedLoc = res;
      console.log('res', res);
      this.apiCall();
    });
  }
  apiCall() {
    this.weatherData.getData(this.selectedLoc).subscribe(
      (data: any) => {
        this.dataObj = data;
        console.log('dataObj', data);
        this.dir = '';
        for (let char of data.current.wind_dir) {
          if (char === 'W') {
            this.dir += 'West';
          } else if (char === 'E') {
            this.dir += 'East';
          } else if (char === 'N') {
            this.dir += 'North';
          } else {
            this.dir += 'South';
          }
        }
        this.dataObj.current.wind_dir = this.dir;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
}
