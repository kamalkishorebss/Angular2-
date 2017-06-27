import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Signin } from '../../pages/signin/signin';
import { Signup } from '../../pages/signup/signup';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigate(){
  this.navCtrl.push(Signin);
  }

  Signup(){
  this.navCtrl.push(Signup);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
