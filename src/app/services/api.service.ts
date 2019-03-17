import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

 getDataWherer(v) {
    return this.http.get(`https://cors.io/?http://api.openweathermap.org/data/2.5/weather?q=${v}&APPID=d9184e125e6c9572ce198a12ffcae04f`);
  }

  getDataCodeContry() {
    return  this.http.get('https://ipapi.co/json/');
  }


  getDataCitys(c) {
    return this.http.get(`https://cors.io/?https://battuta.medunes.net/api/region/${c}/all/?key=1c137589266766b04fac52aa1d5568a1`);
  }

}
