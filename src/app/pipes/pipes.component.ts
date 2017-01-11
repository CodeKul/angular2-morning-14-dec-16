import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  myName = 'android';
  myDate = new Date();
  ctc = 15000;

  currencies = [
    'India',
    'Chiana',
    'Japan',
    'Sri Lanka',
    'America'
  ];

  constructor() { }

  ngOnInit() {
  }

}
