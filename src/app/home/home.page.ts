import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import { ToastController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  splash =true;

  private ngUnsubscribe = new Subject();
  public form : FormGroup;

    constructor(public toastController: ToastController,private route:Router,
                public restProvider: ServiceService,  private formBuilder: FormBuilder
      ) {
      this.form = this.formBuilder.group({
        name: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        phoneNo: ['', [Validators.required, Validators.pattern('[1-9]*'),Validators.minLength(10), Validators.maxLength(10)]],
        address: ['', Validators.compose([Validators.required])],
      });
    }

      ngOnInit(){
        this.ionViewDidLoad();
      }

      async presentToast(message: string) {
        const toast = await this.toastController.create({
          message: message,
          position: "top",
          duration: 2000
        });
        toast.present();
      }


    public onSubmit() {
      let loginDetail: {name: string, email: string, phoneNo: string, address: string} = this.form.value;
      loginDetail = {name : loginDetail.name, email: loginDetail.email.toLowerCase(), phoneNo: loginDetail.phoneNo,
        address: loginDetail.address};
      const loginDetails = JSON.parse(JSON.stringify(loginDetail));
      console.log(loginDetails)
      this.restProvider.postUserDetails(loginDetails).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
          res => (this.loginSuccess(res)),
          error => (this.loginFailure(error)));
    }

    private loginSuccess(response: any) {
      if (response.name === this.form.value.name) {
        console.log(this.form.value.name)
        this.route.navigate(['/dashboard', response.name]);
        this.presentToast(' Login Successful ');
      }
    }

    private loginFailure(error: any) {
    }

    ionViewDidLoad(){
      setTimeout(()=>
        this.splash = false,2000);
    }

    ngOnDestroy(): void {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
    }

}
