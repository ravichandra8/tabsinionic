import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MooffenderDetailsPage } from './mooffender-details';

@NgModule({
  declarations: [
    MooffenderDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MooffenderDetailsPage),
  ],
})
export class MooffenderDetailsPageModule {}
