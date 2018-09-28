import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryOfOriginComponent } from './country-of-origin.component';
import { MatTableModule } from '@angular/material/table';
import { PapaParseModule } from 'ngx-papaparse';

describe('CountryOfOriginComponent', () => {
  let component: CountryOfOriginComponent;
  let fixture: ComponentFixture<CountryOfOriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryOfOriginComponent ],
      imports: [ MatTableModule, PapaParseModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryOfOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
