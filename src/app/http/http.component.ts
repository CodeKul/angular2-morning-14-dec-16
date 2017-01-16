import { MyWebService } from './my-web.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(
    private myHttp: MyWebService
  ) { }

  ngOnInit() {

  }

  callGet() {
    this.myHttp.getData().subscribe(resData => console.log( resData.json()['test']));
  }

  callPost(userName, password){
    this.myHttp.postData({userName : userName, password : password}).subscribe(data => console.log(data));
  }
}
