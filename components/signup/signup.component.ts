import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email: any;
  password: any;
  courses: any[];
  users: any[];
  username : any;

  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    db.list('/users').valueChanges().subscribe(users => {
      this.users = users;
      console.log(this.users);

    });
  }
  private addUsersData(email:string,password:string){
   const itemsRef = this.db.list('items');
itemsRef.push({ email: email,password:password });   
  }

  Register() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(x => {
     this.addUsersData(this.email,this.password)
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
