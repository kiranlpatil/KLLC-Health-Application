import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalInformationPage } from './hospital-information.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalInformationRoutingModule {}
