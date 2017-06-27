import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { BusinessdetailPage } from '../../pages/businessdetail/businessdetail';
import { SortpopoverPage } from '../../pages/sortpopover/sortpopover';
import { HomePage } from '../../pages/home/home';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the BusinessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {
  popover:any;
  users:any;
  userFilter: any = { location: '' };
  constructor(
        public navCtrl: NavController,
        public navParams: NavParams, 
        public popoverCtrl: PopoverController,
        public http: Http
    ) {

    this.http.get('http://localhost:9999/business_userList').map(res => res.json()).subscribe(
	    data => {
	        this.users = data.data;
	        console.log(this.users)
	    },
	    err => {
	        console.log("Oops!");
	    }
    );

  }
  BusDetail(){
       this.navCtrl.push(BusinessdetailPage);
  }
  
   


  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessPage');
  }

  home(){
          this.navCtrl.push(HomePage);
  }

  openPopover(myEvent) {
    let popover = this.popoverCtrl.create(SortpopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
