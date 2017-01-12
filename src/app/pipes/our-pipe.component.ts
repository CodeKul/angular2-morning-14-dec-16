import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-pipe',
  templateUrl: './our-pipe.component.html',
  styleUrls: ['./our-pipe.component.css']
})
export class OurPipeComponent implements OnInit {

  myName = 'android';
  myDate = new Date();
  ctc = 15000;
  myAmt = 0;
  filterWith = 'A';

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
