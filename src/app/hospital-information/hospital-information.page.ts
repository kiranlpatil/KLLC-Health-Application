import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { ServiceService } from '../service.service';
import { LoadingServiceService } from '../loading-service.service';


@Component({
  selector: 'app-hospital',
  templateUrl: './hospital-information.page.html',
  styleUrls: ['./hospital-information.page.scss'],
})
export class HospitalInformationPage implements OnInit {
  products:any;
  public hospital: any;
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

  getHospitalInfo(name: string)
  {
    this.restProvider.getHospitalByName(name)
        .then(data=>{
          this.hospital = data;
          this.loading.dismiss();
        });
  }

  booked() {
    this.presentToast('Booked!');
  }
}
