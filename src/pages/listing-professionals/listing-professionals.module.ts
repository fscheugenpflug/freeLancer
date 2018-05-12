import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListingProfessionalsPage } from './listing-professionals';

@NgModule({
  declarations: [
    ListingProfessionalsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListingProfessionalsPage),
  ],
})
export class ListingProfessionalsPageModule {}
