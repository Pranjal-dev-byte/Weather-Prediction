export class getWeatherModel {
  current: currentWeather;
  location: currentLocation;
  request: requestData;
  constructor() {
    this.current = new currentWeather();
    this.location = new currentLocation();
    this.request = new requestData();
  }
}

export class currentWeather {
  cloudcover: number;
  feelslike: number;
  humidity: number;
  is_day: string;
  observation_time: string;
  precip: number;
  pressure: number;
  temperature: number;
  uv_index: number;
  visibility: number;
  weather_code: number;
  weather_descriptions: Array<string>;
  weather_icons: Array<string>;
  wind_degree: number;
  wind_dir: string;
  wind_speed: number;

  constructor() {
    this.cloudcover = 0;
    this.feelslike = 0;
    this.humidity = 0;
    this.is_day = 'null';
    this.observation_time = 'null';
    this.precip = 0;
    this.pressure = 0;
    this.temperature = 0;
    this.uv_index = 0;
    this.visibility = 0;
    this.weather_code = 0;
    this.weather_descriptions = new Array<string>();
    this.weather_icons = new Array<string>();
    this.wind_degree = 0;
    this.wind_dir = 'null';
    this.wind_speed = 0;
  }
}

export class currentLocation {
  country: string;
  lat: string;
  localtime: string;
  localtime_epoch: number;
  lon: string;
  name: string;
  region: string;
  timezone_id: string;
  utc_offset: string;

  constructor() {
    this.country = '';
    this.lat = '';
    this.localtime = '';
    this.localtime_epoch = 0;
    this.lon = '';
    this.name = '';
    this.region = '';
    this.timezone_id = '';
    this.utc_offset = '';
  }
}

export class requestData {
  language: string;
  query: string;
  type: string;
  unit: string;

  constructor() {
    this.language = '';
    this.query = '';
    this.type = '';
    this.unit = '';
  }
}
