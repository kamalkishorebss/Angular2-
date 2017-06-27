import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../../pages/product/product';
import { AddressPage } from '../../pages/address/address';
import { Tab1Page } from '../../pages/tab1/tab1';
import { Tab2Page } from '../../pages/tab2/tab2';
import { Tab3Page } from '../../pages/tab3/tab3';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the BusinessdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-businessdetail',
  templateUrl: 'businessdetail.html',
})
export class BusinessdetailPage {
  cat: any;
  products:any;
  id:any; 
  brightness:any;
  q:number=0;
  find:boolean=false;
  prod: any = { name: '' };
  constructor(
        public navCtrl: NavController,
        public navParams: NavParams, 
        public http: Http
    ) {   
    this.cat="detail";
    this.id = navParams.get('param1');
      this.http.get('http://localhost:9999/productlist').map(res => res.json()).subscribe(
        data => {
            this.products = data.data;
            console.log(this.products)
        },
        err => {
            console.log("Oops!");
        }
      );

  }

  view(id){           
       this.navCtrl.push(ProductPage,{param1:id});          
       
    }

  qtyInc(){
  this.q=this.q+1;
  } 

  qtyDcr(){
   if(this.q>0){
   this.q=this.q-1;
   }
  }

  checkout(){
  this.navCtrl.push(AddressPage);      
  }


  finding(){
    this.find = true;
    return this.find;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessdetailPage');
  }

}
