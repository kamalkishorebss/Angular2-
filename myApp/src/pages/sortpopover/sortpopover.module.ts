import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SortpopoverPage } from './sortpopover';

@NgModule({
  declarations: [
    SortpopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(SortpopoverPage),
  ],
  exports: [
    SortpopoverPage
  ]
})
export class SortpopoverPageModule {}
