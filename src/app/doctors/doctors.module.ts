import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricelistAllProductPageRoutingModule } from './doctors-routing.module';

import { DoctorsPage } from './doctors.page';
import {AccordionComponent} from '../accordion/accordion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PricelistAllProductPageRoutingModule,
    
  ],
  declarations: [DoctorsPage,AccordionComponent]
})
export class PricelistAllProductPageModule {}
