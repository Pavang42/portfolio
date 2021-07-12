import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../services/country.service';
import { Country } from '../shared/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countries: Country[] = [];
  countriesVisited: Country[] = [];
  constructor(
    private countryService: CountryService,
    private route: Router
  ) { }

  ngOnInit() {
    this.countryService.getCountriesTobeVisited().then(countries => {
      this.countries = countries;
    });
    this.countryService.getCountriesVisited().then(countries => {
      this.countriesVisited = countries;
    });
  }

  updateCountryAsVisited(country: Country) {
    this.route.navigate(['/country', country.id]);
  }

}
