import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalInformationRoutingModule } from './hospital-information-routing.module';

import { HospitalInformationPage } from './hospital-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitalInformationRoutingModule
  ],
  declarations: [HospitalInformationPage]
})
export class HospitalInformationModule {}
