import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginr',
  templateUrl: './loginr.component.html',
  styleUrls: ['./loginr.component.css']
})
export class LoginrComponent implements OnInit {

  constructor(private router : Router) { 
  }

  ngOnInit() {
  }

  public doLogin(userName : string, password : string) : any | boolean {
    let status = true;

    if(userName == 'android' && password == 'android') {
      status = false;
      this.router.navigate(['proj',userName]);
    } 
    return status;
  }
}
