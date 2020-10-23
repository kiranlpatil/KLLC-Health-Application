import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {
  isLoading = true;
  constructor(public loadingController: LoadingController) { }
  async present() {
    
    return await this.loadingController.create({
     spinner: 'bubbles'
   
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log());
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log());
  }

}
