import { Injectable } from '@angular/core';
import { Country } from '../shared/country';
import { COUNTRIES } from '../shared/countries';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries() {
    return of(COUNTRIES).toPromise();
  }

  getCountriesVisited() {
    return of(COUNTRIES.filter((country) => country.isVisited)).toPromise();
  }

  getCountriesTobeVisited() {
    return of(COUNTRIES.filter((country) => !country.isVisited)).toPromise();
  }

  getCountryDetailsById(id: string) {
    return of(COUNTRIES.filter((country) => (country.id === id))[0]);
  }
}
