import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login-page/login-page';
import { Signin } from '../pages/signin/signin';
import { Category } from '../pages/category/category';
import { Location } from '../pages/location/location';
import { Products } from '../pages/products/products';
import { Signup } from '../pages/signup/signup';
import { ProductPage } from '../pages/product/product';
import { BusinessPage } from '../pages/business/business';
import { BusinessdetailPage } from '../pages/businessdetail/businessdetail';
import { MylistPage } from '../pages/mylist/mylist';
import { SortpopoverPage } from '../pages/sortpopover/sortpopover';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { Tab3Page } from '../pages/tab3/tab3';
import { AddressPage } from '../pages/address/address';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

@NgModule({
  declarations: [
                MyApp,
                HomePage,
                LoginPage,
                Signin,
                Category,
                Products,
                Location,
                Signup,
                ProductPage,
                BusinessPage,
                BusinessdetailPage,
                SortpopoverPage,
                MylistPage,
                Tab1Page,
                Tab2Page,
                Tab3Page,
                AddressPage
                
  ],
  
  imports: [
              BrowserModule,    
              HttpModule,
              Ng2FilterPipeModule,
              IonicModule.forRoot(MyApp,{
                tabsPlacement: 'bottom',
                platforms: {
                  ios: {
                    tabsPlacement: 'top',
                  }
                }
              })
  ],

  bootstrap: [IonicApp],

  entryComponents: [
                    MyApp,
                    HomePage,
                    LoginPage,
                    Location,
                    BusinessPage,
                    Signin,
                    Category,
                    Products,
                    ProductPage,
                    BusinessdetailPage,
                    Signup,
                    MylistPage,
                    Tab1Page,
                    Tab2Page,
                    Tab3Page,
                    SortpopoverPage,
                    AddressPage
                    
  ],
  providers: [
                StatusBar,
                SplashScreen,
                HttpModule,
                {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
