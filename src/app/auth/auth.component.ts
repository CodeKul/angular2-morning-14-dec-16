import { AuthServiceService } from './auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private service : AuthServiceService
  ) { }

  ngOnInit() {
  }

  login(email, password){
    this.service.login(email, password, () => { })
  }
}
