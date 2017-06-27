import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SortpopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sortpopover',
  templateUrl: 'sortpopover.html',
})
export class SortpopoverPage {

  constructor(
    public navCtrl: NavController,
   public navParams: NavParams,
   public viewCtrl: ViewController
   ){

  }

  close() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SortpopoverPage');
  }

}
