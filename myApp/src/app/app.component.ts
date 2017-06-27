import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login-page/login-page';
import { Signin } from '../pages/signin/signin';
import { HomePage } from '../pages/home/home';
import { Category } from '../pages/category/category';
import { Location } from '../pages/location/location';
import { Products } from '../pages/products/products';
import { Signup } from '../pages/signup/signup';
import { ProductPage } from '../pages/product/product';
import { BusinessPage } from '../pages/business/business';
import { BusinessdetailPage } from '../pages/businessdetail/businessdetail';
import { SortpopoverPage } from '../pages/sortpopover/sortpopover';
import { MylistPage } from '../pages/mylist/mylist';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { Tab3Page } from '../pages/tab3/tab3';
import { AddressPage } from '../pages/address/address';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
