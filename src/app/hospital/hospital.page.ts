import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';
import { LoadingServiceService } from '../loading-service.service';

@Component({
  selector: 'app-company',
  templateUrl: './hospital.page.html',
  styleUrls: ['./hospital.page.scss'],
})
export class HospitalPage implements OnInit {
  company:any;
  constructor(public loading:LoadingServiceService,public restProvider: ServiceService) {
    this.getHospital();
  }

  ngOnInit() {
    this.loading.present();
  }

  getHospital() {
     this.restProvider.getHospitals()
     .then(data=>{
       this.company=data;
       this.loading.dismiss();
     });
  }
}
