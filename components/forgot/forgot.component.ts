import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  email: any;

  resetPassword() {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(this.email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }
  constructor() { }

  ngOnInit() {
  }

}
