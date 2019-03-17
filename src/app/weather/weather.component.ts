import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { jitExpression } from '@angular/compiler';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private ip: ApiService, public cit: ApiService ) { }
  // tslint:disable-next-line:max-line-length


  capitals = [{
    countryCode: 'TN',
    countryName: 'Tunisia',
    capital: 'Tunis'
},
{
    countryCode: 'GB',
    countryName: 'United Kingdom',
    capital: 'London'
},
{
  countryCode: 'us',
  countryName: 'United States',
  capital: 'Washington'
}
];

countCode: string;
capitalName: any;
capital: string;
citys: any;
newStr: any;
datawhe: any;
citysWhether: any;
sendConCod: any;
whthCit: any;
/*


  datawhe: any;
  d = new Date();

  hour = this.d.getHours();
  min = this.d.getMinutes();
  day = this.d.getDay();
  s = this.d.getSeconds();
  daynum = this.d.getDate();
  */

 d = new Date();
 hour: any;
 min: any;

getTime() {
 this.min = this.d.getMinutes();
 this.hour = this.d.getHours();
 return this.hour + ':' + this.min;
}


ngOnInit() {
     /* this.ip.getDataCodeContry().subscribe((data: any) => {*/
      // data.country;
        this.countCode = 'us';

        // get code coutry

        for (var i = 0; i < this.capitals.length; i++) {
          let capitalName: any = this.capitals.filter(u =>
            u.countryCode == this.countCode);
        }
        this.capital = capitalName[0].capital;

        this.cit.getDataWherer(this.capital).subscribe((data: any) => {
          this.datawhe = data;

          });

        this.cit.getDataCitys(this.countCode).subscribe((data: any) => {
          this.citys = data;
          for (var i = 0; i < this.citys.length; i++) {
            this.cit.getDataWherer(this.citys[i].region).subscribe((data: any) => {
              /*bject.defineProperty(this.citys, 'temWht', {value : data.main.temp});*/
              /*this.citys.wheth = data.main.temp ;*/

             Object.defineProperties(this.citys[1], {
                wheth: { value: (data.main.temp / 10).toPrecision(2)}
              });

            /* console.log(this.citys);
             console.log(JSON.stringify(this.citys));
*/
              /*console.log('objet ' + JSON.stringify(data, null, 4));*/

            });
           /* citys whther: ' + this.citys[i].temWht);*/
          }
/*
          this.citys.temWht = data.main.temp;
          console.log('objet' + JSON.stringify(this.citys));
*/
        });



 /* });*/


   }
   sendCoutry(sta) {
    for (var i = 0; i < this.capitals.length; i++) {
      let capitalName: any = this.capitals.filter(u =>
        u.countryName == sta.value);
       this.capital = capitalName[0].capital;


      let sendConCod: any = this.capitals.filter(u =>
          u.capital == this.capital);
      this.cit.getDataCitys(sendConCod[0].countryCode).subscribe((data: any) => {
            this.citys = data;
            for (var i = 0; i < this.citys.length; i++) {
/*
              this.cit.getDataWherer(this.citys[i].region).subscribe((data: any) => {
                 this.whthCit = data;
                console.log(JSON.stringify(this.whthCit.region));
              }); */
            }
          });




    }




    this.cit.getDataWherer(this.capital).subscribe((data: any) => {
        this.datawhe = data;
        });


/*
    this.cit.getDataCitys(filterResult.countryCode).subscribe((data: any) => {
          this.citys = data;
        });*/
   }


}
