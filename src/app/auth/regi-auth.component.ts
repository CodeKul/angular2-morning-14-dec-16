import { AuthServiceService } from './auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regi-auth',
  templateUrl: './regi-auth.component.html',
  styleUrls: ['./regi-auth.component.css']
})
export class RegiAuthComponent implements OnInit {

  constructor(
    private service : AuthServiceService
  ) { }

  ngOnInit() {
  }

  doRegistration(email , password, confirmPassword) {
      if(password === confirmPassword) {
        this.service.createNewUser(email, password);
      }
  }
}
