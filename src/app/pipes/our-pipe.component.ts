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

  asyncPipe = new Promise(
    (resolve, reject) => setTimeout( 
        () =>  resolve('I am async'),1500
    )  
  );

  constructor() { }

  ngOnInit() { 
  }

  pushCurr(curr) { // use such function to avoid pure false;
    let temp = [];
    this.currencies.forEach(curr => temp.push(curr));
    temp.push(curr);

    this.currencies = [];
    temp.forEach(curr => this.currencies.push(curr));
  }

}
