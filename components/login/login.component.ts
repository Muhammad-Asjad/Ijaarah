import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email : any;
  
  password : any;
  courses: any[];
  express: any;
  users: any[];
  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    db.list('/users').valueChanges().subscribe(users => {
      this.users = users;
      console.log(this.users);

    });
  }

  private addUsersData() {
    const itemsRef = this.db.list('/login');
    itemsRef.push({ email: this.email, password: this.password });
  }

  login() {
    console.log(this.email);
    console.log(this.password);
    
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(x => {
      console.log(x);
      
      this.addUsersData();
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}




