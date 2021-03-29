import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private locationSource = new BehaviorSubject('New Delhi');
  currentLoc = this.locationSource.asObservable();

  constructor(private http: HttpClient) {}
  url = 'http://api.weatherstack.com/current';
  apiKey = '89fec8f87ef7f40e00a201632007c066';

  getData(loc) {
    let params = new HttpParams();
    params = params.append('access_key', this.apiKey);
    params = params.append('query', loc);
    return this.http.get(this.url, { params });
  }
  setLocation(loc: any) {
    this.locationSource.next(loc);
  }
}
