import { MyWebService } from './my-web.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  allUsers  = [];
  constructor(
    private myHttp: MyWebService
  ) { }

  ngOnInit() {

  }

  callGet() {
    console.log('Call called');
    this.myHttp.getData()
      .subscribe(resData => console.log(resData), err => console.log(err));
  }

  callPost(userName, password) {
    this.myHttp.postData({ userName: userName, password: password })
      .subscribe(data => console.log(data), err => console.log(err));
  }

  callAllUsers() {
    this.myHttp.getAllMyUsers()
      .subscribe(users => {
        console.log(users);
        for(let key in users){
          // console.log(users[key]['userName']);
          this.allUsers.push(users[key]['userName']);
        }
      }, err => console.log(err));
  }

  
}
