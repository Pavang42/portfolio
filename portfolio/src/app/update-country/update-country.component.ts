import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css']
})
export class UpdateCountryComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {
    this.activatedRoute.params.subscribe(params => {
      const countryId = params.id;
      this.getCountryDetails(countryId);
    });
  }

  ngOnInit() {
  }

  getCountryDetails(countryId: string) {
    this.countryService.getCountryDetailsById(countryId).subscribe(details => {
      console.log(details, 'details');
    });
  }

}
