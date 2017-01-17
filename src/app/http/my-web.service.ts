import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'

@Injectable()
export class MyWebService {

  constructor(
    private http: Http
  ) {
  }

  getData() {
    return this.http.get('https://angular-demo-d9927.firebaseio.com/project.json')
      .map(data => data.json())
      .catch(err => Observable.throw(err));
  }

  postData(user : any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://angular-demo-d9927.firebaseio.com/codeKulData.json',body,{
      headers : headers
    }).map(data => data.json())
     .catch(err => Observable.throw(err));
  }

  getAllMyUsers() {
    return this.http.get('https://angular-demo-d9927.firebaseio.com/codeKulData.json')
    .map(data => data.json())
    .catch(this.myErrHandler);
  }

  checkUserName(userName) : Observable<Response>{
    return this.http.get('https://angular-demo-d9927.firebaseio.com/codeKulData.json')
    .map(data => data.json())
    .map(users => {
      for (let key in users) {
         if(userName === users[key]['userName']) return true;
         else false;
      }
      return false;
    })
    .catch(this.myErrHandler);
  }

  private myErrHandler(err){
    return Observable.throw(err);
  }
}
