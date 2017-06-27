import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Products } from '../../pages/products/products';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the Category page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class Category {

  category: any;
  cat:any;

  constructor(
           public navCtrl: NavController,
           public http: Http,
           public navParams: NavParams
  ){

	this.http.get('http://localhost:9999/allcategory').map(res => res.json()).subscribe(
	    data => {
	        this.category = data.data;
	        console.log(this.category)
	    },
	    err => {
	        console.log("Oops!");
	    }
    );

    }

  productByCat(id){

          this.cat = id;
          this.navCtrl.push(Products,{ param1: this.cat});
          
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad Category');
  }

}
