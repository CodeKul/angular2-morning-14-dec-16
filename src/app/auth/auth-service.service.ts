import { Injectable } from '@angular/core';

declare var firebase: any;

@Injectable()
export class AuthServiceService {

  constructor() {

  }

  createNewUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(`Error Code is ${errorCode} and Message is ${errorMessage}`);
    });
  }

  login(email, password, loginCallback) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(loginCallback).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
       console.log(`Error Code is ${errorCode} and Message is ${errorMessage}`);
    });
  }
}
