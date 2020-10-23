import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { NavController, ToastController  } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingServiceService } from '../loading-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  products:any;
  public nodata:string = null
  constructor(public loading: LoadingServiceService,public toastController: ToastController,public navCtrl: NavController ,public router:ActivatedRoute
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
      this.restProvider.getProductDetails(p_name)
      .then(data=>{
        this.products=data;
        if(this.products.length == 0)
        {
          this.presentToast(' No Data to display ')
          this.nodata = "No Data Found"
          this.loading.dismiss();
        }
        else{
          this.loading.dismiss();
        }
      });
     
    });
  }

    Ordered() {
      this.presentToast(' Product Ordered ');
    }
}
