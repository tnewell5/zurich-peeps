import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { data } from '../data/bev336od3361';

export interface People {
  nationality: string;
  population: string;
}

enum HeaderRow {
  YEAR,
  NATION = 5,
  POPULATION = 12
}

@Component({
  selector: 'app-country-of-origin',
  templateUrl: './country-of-origin.component.html',
  styleUrls: ['./country-of-origin.component.css']
})
export class CountryOfOriginComponent {
  dataSource: People[] = [];
  displayedColumns: string[] = ['nationality', 'population'];

  constructor(private papa: Papa) {
    this.papa.parse(data, {
      delimiter: ',',
      complete: (result) => {
        const parsedData = result.data;
        const nationalities = {};

        parsedData.forEach(row => {
          if (row[HeaderRow.YEAR] === '2017') {
            if (nationalities[row[HeaderRow.NATION]]) {
              nationalities[row[HeaderRow.NATION]] += parseInt(row[HeaderRow.POPULATION], 10);
            } else {
              nationalities[row[HeaderRow.NATION]] = parseInt(row[HeaderRow.POPULATION], 10);
            }
          }
        });

        Object.keys(nationalities).forEach(key => {
          this.dataSource.push({nationality: key, population: nationalities[key]});
        });
      }
    });
  }
}
