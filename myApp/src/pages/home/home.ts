import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Location } from '../../pages/location/location';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  brands:any;
  products:any;
  Categories:any;  
  banner:string[]= ["/img/accessories.png","/img/fashion.png","/img/grocery.png","/img/sports.png"];  

  constructor(
           public navCtrl: NavController,
           public http: Http,
           public navParams: NavParams
  ){ 


	this.http.get('http://localhost:9999/brand_list').map(res => res.json()).subscribe(
	    data => {
	        this.brands = data.data;
	        console.log(this.brands)
	    },
	    err => {
	        console.log("Oops!");
	    }
    );


    this.http.get('http://localhost:9999/productlist').map(res => res.json()).subscribe(
	    data => {
	        this.products = data.data;
	        console.log(this.products)
	    },
	    err => {
	        console.log("Oops!");
	    }
    );

    this.http.get('http://localhost:9999/allcategory').map(res => res.json()).subscribe(
	    data => {
	        this.Categories = data.data;
	        console.log(this.Categories)
	    },
	    err => {
	        console.log("Oops!");
	    }
    );

    }

    compass(){
       this.navCtrl.push(Location);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
