import {Component, OnInit, ViewChild, Input, Renderer} from '@angular/core';
import { ServiceService } from '../service.service';
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  accordionExapanded = true;
  products:any;
  private ngUnsubscribe = new Subject();
  @ViewChild('cc', {static: true}) cardContent: any;
  @Input ('title') title:string;
  
  constructor(public renderer: Renderer, public restProvider: ServiceService) {
    
   }

      ngOnInit() {
        this.renderer.setElementStyle(this.cardContent.el, "max-height", "0px");
         this.renderer.setElementStyle(this.cardContent.el, "padding", "0px 16px");
         this.getDoctors();

      }

      toggleAccordion() {
        if (this.accordionExapanded) {
         this.renderer.setElementStyle(this.cardContent.el, "max-height", "500px");
         this.renderer.setElementStyle(this.cardContent.el, "padding", "13px 16px");
        } else {
         this.renderer.setElementStyle(this.cardContent.el, "max-height", "0px");
         this.renderer.setElementStyle(this.cardContent.el, "padding", "0px 16px");
        }
        this.accordionExapanded = !this.accordionExapanded;

 }

    private getDoctors() {
        this.restProvider.getDoctorsByRange(this.title)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                success => this.getHospitalSuccess(success),
                error => this.getHospitalError(error)
            );
    }

    getHospitalSuccess(success: any) {
        this.products = success;
    }

    getHospitalError(err: any) {
    }
}
