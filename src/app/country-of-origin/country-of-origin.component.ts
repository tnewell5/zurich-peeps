import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { data } from '../data/bev336od3361';

export interface PeriodicElement {
  countryOfOrigin: string;
  population: number;
}

const COUNTRIES_DATA: PeriodicElement[] = [
  {countryOfOrigin: 'Unicorn Land', population: 999},
  {countryOfOrigin: 'Chupacabra Forest', population: 888}
];

@Component({
  selector: 'app-country-of-origin',
  templateUrl: './country-of-origin.component.html',
  styleUrls: ['./country-of-origin.component.css']
})
export class CountryOfOriginComponent {
  constructor(private papa: Papa) {
    this.papa.parse(data, {
      delimiter: ',',
      complete: (result) => {
        console.log('Parsed: ', result);
      }
    });
  }

  displayedColumns: string[] = ['countryOfOrigin', 'population'];
  dataSource = COUNTRIES_DATA;
}
