import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriceListPageRoutingModule } from './doctor-routing.module';

import { DoctorPage } from './doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PriceListPageRoutingModule
  ],
  declarations: [DoctorPage]
})
export class PriceListPageModule {}
