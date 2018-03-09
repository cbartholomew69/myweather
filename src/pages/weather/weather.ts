import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherService } from '../../app/services/weather.service';

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  city: String;
  state: String;

  constructor(public navCtrl: NavController, private weatherService:WeatherService) {
    this.city = 'Boston';
    this.state = 'MA';
  }

  ngOnInit() {
    this.weatherService.getWeather(this.city, this.state)
      .subscribe(weather => {
        console.log(weather);
      });
  }

}
