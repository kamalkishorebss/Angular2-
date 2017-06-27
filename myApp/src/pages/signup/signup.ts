import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Signin } from '../../pages/signin/signin';
/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  account(){
   this.navCtrl.push(Signin);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

}
