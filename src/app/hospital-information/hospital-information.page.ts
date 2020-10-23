import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { ServiceService } from '../service.service';
import { LoadingServiceService } from '../loading-service.service';
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";


@Component({
  selector: 'app-hospital',
  templateUrl: './hospital-information.page.html',
  styleUrls: ['./hospital-information.page.scss'],
})
export class HospitalInformationPage implements OnInit {
  products:any;
  public hospital: any;
  private ngUnsubscribe = new Subject();
  constructor(public loading: LoadingServiceService,public toastController: ToastController,private route: Router,public navCtrl: NavController, public restProvider: ServiceService,public router:ActivatedRoute) {
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: "bottom",
      duration: 1500
    });
    toast.present();
  }

  ngOnInit() {
    this.loading.present();
    this.router.paramMap.subscribe(paramMap => {
      if(!paramMap.has('v_name')){
        return;
      }
      const v_name = paramMap.get('v_name');
      this.getHospitalInfo(v_name);
    });
  }

  private getHospitalInfo(name: string) {
    this.restProvider.getHospitalByName(name)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(
            success => this.getHospitalSuccess(success),
            error => this.getHospitalError(error)
        );
  }

  getHospitalSuccess(success: any) {
    this.hospital = success;
    this.loading.dismiss();
  }

  getHospitalError(err: any) {
  }

  booked() {
    this.presentToast('Booked!');
  }
}
