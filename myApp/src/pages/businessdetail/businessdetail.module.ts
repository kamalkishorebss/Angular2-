import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessdetailPage } from './businessdetail';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
@NgModule({
  declarations: [
    BusinessdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessdetailPage),
  ],
  exports: [
    BusinessdetailPage
  ]
})
export class BusinessdetailPageModule {}
