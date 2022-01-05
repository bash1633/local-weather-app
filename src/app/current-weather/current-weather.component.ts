import { Component, OnInit } from '@angular/core'

import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor(private weatherServices: WeatherService) {}

  ngOnInit(): void {
    this.weatherServices.getCurrentWeather('Melbourne', 'AU').subscribe((data) => {
      this.current = data
    })
  }
}