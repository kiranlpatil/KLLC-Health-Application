import { Component, OnInit, ViewChild, Renderer, Pipe, PipeTransform } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
@Pipe({
  name: 'filter'
})
export class DashboardPage implements OnInit {

  products:any;
  searchitem:any;
  searchcompany:any;
  first_name:any;
  searchText: string;
  overlayHidden: boolean = false;
  constructor(private route: Router,public restProvider: ServiceService, public router:ActivatedRoute) {
   }
   public hideOverlay() {
    this.overlayHidden = true;
  }
  ngOnInit() {

    this.router.paramMap.subscribe(paramMap => {
     this.first_name = paramMap.get("first_name");

    })
    this.restProvider.getProductsAllTypes().then(data => {
      this.searchitem = data; })
    this.restProvider.getDoctors().then(data2 => {
      this.searchcompany = data2; })
  }

  gotoProducts() {
    this.route.navigate(['/products']);
  }

  gotoPricelist() {
    this.route.navigate(['/doctor']);
  }

  goToHospitals() {
    this.route.navigate(['/hospital']);
  }

  transform(value:string): string {
    if (value) {
      let first = value.substr(0,1).toUpperCase();
      return first + value.substr(1);
    } else {
      return '';
    }
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  slideOptions = {
    initialSlide: 0,
    speed: 500,
  };
}
