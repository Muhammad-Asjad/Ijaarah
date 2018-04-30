import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AdService, AdListing } from './ad.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent {

  postAdd: FormGroup;
  constructor(public fb: FormBuilder, private db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.createForm();
  }


  createForm() {
    this.postAdd = this.fb.group({
      Category: ['', [Validators.required, Validators.minLength(100)]],
      title: ['', [Validators.required, Validators.minLength(50)]],
      Description: ['', [Validators.required, Validators.minLength(255)]],
      price: ['', [Validators.required, Validators.minLength(13)]],
      name: ['', [Validators.required, Validators.minLength(13)]],
      email: ['', [Validators.required, Validators.minLength(50)]],
      phone: ['', [Validators.required, Validators.minLength(13)]],
      password: ['', [Validators.required, Validators.minLength(13)]],
      image: ['', [Validators.required]],

    })
    
  }

/*
  fetchData() {
    console.log(this.postAdd.value);
        //this.addUsersData();    
  }
*/
  private addUsersData() {
    console.log(this.postAdd.value)
    const itemsRef = this.db.list('/Posted_Ads');
    itemsRef.push( this.postAdd.value );
  }
}
