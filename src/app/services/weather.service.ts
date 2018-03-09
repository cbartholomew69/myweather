import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
    http: any;
    apiKey: String;
    conditionsUrl: String;

    constructor(http:Http) {
        this.http = http;
        this.apiKey = '95b6387d0f35ef88';
        this.conditionsUrl = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
    }

    getWeather(city, state) {
        return this.http.get(this.conditionsUrl+'/'+state+'/'+city+'.json')
            .map(res => res.json());
    }
}