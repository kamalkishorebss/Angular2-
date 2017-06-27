import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../../pages/product/product';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the Products page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class Products {
  
  products:any;
  id:any;
  productId:any;

    constructor(
		      public navCtrl: NavController,
		      public navParams: NavParams,
		      public http: Http
    ) {

        this.id = navParams.get('param1');
        this.http.get('http://localhost:9999/getProductByCat/'+this.id).map(res => res.json()).subscribe(
	    data => {
		        this.products = data.data;
		        console.log(this.products);
	    },
	    err => {
	        console.log("Oops!");
	    }
       );
    }

    view(id){
           
       this.navCtrl.push(ProductPage,{param1:id});          
       
    }
  
   

	ionViewDidLoad() {
	    console.log('ionViewDidLoad Products');
	}

}
