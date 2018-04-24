import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent {
  category: any[]
  ad_title: any[]
  ad_description: any[]
  price: any[]

  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth) { }

  private addUsersData(category: string, ad_title: string, ad_description: string, price: string) {
    const itemsRef = this.db.list('/ads');
    itemsRef.push({ category: category, ad_title: ad_title, ad_description: ad_description, price: price });
  }
 /*  createAd() {
    const adDefault = new AdListing()
    const adKey = this.db.list('/ads').push(adDefault).key
    return this.db.object('/ads/' + adKey)
  }*/
}
