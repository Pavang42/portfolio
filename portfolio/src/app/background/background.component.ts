import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { EXPERIENCES } from '../shared/experiences';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  EXPERIENCES = EXPERIENCES;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor() { }

  ngOnInit() {
  }

}
