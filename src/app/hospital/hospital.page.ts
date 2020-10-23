import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { LoadingServiceService } from '../loading-service.service';
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-company',
  templateUrl: './hospital.page.html',
  styleUrls: ['./hospital.page.scss'],
})
export class HospitalPage implements OnInit {
  company:any;
  private ngUnsubscribe = new Subject();
  constructor(public loading:LoadingServiceService,public restProvider: ServiceService) {
    this.getHospital();
  }

  ngOnInit() {
    this.loading.present();
  }

  private getHospital() {
    this.restProvider.getHospitals()
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(
            success => this.getHospitalSuccess(success),
            error => this.getHospitalError(error)
        );
  }

  getHospitalSuccess(success: any) {
    this.company = success;
    this.loading.dismiss();
  }

  getHospitalError(err: any) {
  }
}
