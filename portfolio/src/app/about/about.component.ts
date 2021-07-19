import { Component, OnInit } from '@angular/core';
import { SUMMARY } from '../shared/summary';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  SUMMARY = SUMMARY;
  constructor() { }

  ngOnInit() {
  }

}
