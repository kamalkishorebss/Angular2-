import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusinessPage } from '../../pages/business/business';

/**
 * Generated class for the Location page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class Location {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  business(){
   this.navCtrl.push(BusinessPage);
  } 
   

  ionViewDidLoad() {
    console.log('ionViewDidLoad Location');
  }

}
