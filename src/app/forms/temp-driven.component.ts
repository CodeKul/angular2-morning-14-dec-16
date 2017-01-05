import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-temp-driven',
  templateUrl: './temp-driven.component.html',
  styleUrls: ['./temp-driven.component.css']
})
export class TempDrivenComponent implements OnInit {

  dataForm = {
    firstName : '',
    email : '',
    password : ''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form : NgForm) {
    //console.log(this.dataForm);
    console.log(form);
  }
}
