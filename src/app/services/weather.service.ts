import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
    Http: any;
    apiKey: String;
    conditionsUrl: String;

    constructor() {
        this.Http = Http;
        this.apiKey = '95b6387d0f35ef88';
        this.conditionsUrl = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
    }

    getWeather(city, state) {
        return this.Http.get(this.conditionsUrl+'/'+state+'/'+city+'.json')
            .map(res => res.json());
    }
}