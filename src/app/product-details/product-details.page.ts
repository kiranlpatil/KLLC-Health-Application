import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { ToastController  } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingServiceService } from '../loading-service.service';
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  products:any;
  public nodata:string = null
  private ngUnsubscribe = new Subject();
  constructor(public loading: LoadingServiceService,public toastController: ToastController, public router:ActivatedRoute
    ,public restProvider: ServiceService) {
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
      if(!paramMap.has('p_name')){
        return;
      }
      const p_name = paramMap.get('p_name');
      this.getProductDetails(p_name);
    });
  }

    private getProductDetails(name: string) {
        this.restProvider.getProductDetails(name)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                success => this.getHospitalSuccess(success),
                error => this.getHospitalError(error)
            );
    }

    getHospitalSuccess(success: any) {
          this.products=success;
          if(this.products.length == 0) {
            this.presentToast(' No Data to display ')
            this.nodata = "No Data Found"
            this.loading.dismiss();
          }
          this.loading.dismiss();

    }

    getHospitalError(err: any) {
    }

    Ordered() {
      this.presentToast(' Product Ordered ');
    }
}
