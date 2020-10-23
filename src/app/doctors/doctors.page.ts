import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { Router} from '@angular/router';
import { ServiceService } from '../service.service';
import { LoadingServiceService } from '../loading-service.service';


@Component({
  selector: 'app-pricelist-all-product',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],


})
export class DoctorsPage implements OnInit {

  products:any;
  productTypes:any;
  @ViewChild('cc', {static: true}) cardContent: any;
  @Input ('title') title:string;

    constructor(public loading: LoadingServiceService, public restProvider: ServiceService) {
     }

      ngOnInit() {
        this.loading.present();
         this.getAllDoctors();
      }

      getAllDoctors()
        {
         this.restProvider.getDoctors()
            .then(data=>{
             this.productTypes=data;
             this.loading.dismiss();
            });
        }
}
