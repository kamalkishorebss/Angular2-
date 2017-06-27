import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessPage } from './business';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

@NgModule({
  declarations: [
    BusinessPage,
  ],
  imports: [
    Ng2FilterPipeModule,
    IonicPageModule.forChild(BusinessPage)
  ],
  exports: [
    BusinessPage
  ]
})
export class BusinessPageModule {}
