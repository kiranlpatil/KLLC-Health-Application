import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';
import { LoadingServiceService } from '../loading-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.page.html',
  styleUrls: ['./all-products.page.scss'],
})
export class AllProductsPage implements OnInit {
  products:any;
  public searchInput='';
  searchproduct = [];
  searchitem:any;


  public showSearchBar = false;

  constructor(public loading: LoadingServiceService,private route: Router,public navCtrl: NavController, public restProvider: ServiceService) {
    
   }

  ngOnInit() {
    this.loading.present();
    this.restProvider.getProductsAllTypes()
    .then(data=>{
     this.products=data;
     this.loading.dismiss();
    } ,error => {
        console.log(error);
        this.loading.dismiss();
      })
    
    this.restProvider.getProductsAllTypes().then(data => {
      this.searchitem = data;
    })
  }
  initializeItems() {
    this.searchproduct = [];

  }
  getItems(ev) {
    this.initializeItems();
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.searchproduct = this.searchitem.filter((item) => {
        return (item.p_name.toLowerCase().indexOf(val.toLowerCase()) > -1 );
      })
    }
  }

  onclick(event: Event) {
    this.showSearchBar = !this.showSearchBar;

  }
 
  }


