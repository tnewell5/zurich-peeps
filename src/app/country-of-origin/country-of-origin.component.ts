import { Component, OnInit } from '@angular/core';

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
  displayedColumns: string[] = ['countryOfOrigin', 'population'];
  dataSource = COUNTRIES_DATA;
}
