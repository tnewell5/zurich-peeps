import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zurich-peeps';
  displayCountryOfOrigin = false;
  onClickYearButton() {
    console.log('show data for year');
    this.displayCountryOfOrigin = !this.displayCountryOfOrigin;
  }
}
