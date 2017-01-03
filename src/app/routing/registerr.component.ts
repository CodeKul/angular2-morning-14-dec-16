import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerr',
  templateUrl: './registerr.component.html',
  styleUrls: ['./registerr.component.css']
})
export class RegisterrComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  doRegistration(firstName, email, password) {
    this.router.navigate(['proj', firstName], { queryParams: { email: email, password: password } });
  }
}
