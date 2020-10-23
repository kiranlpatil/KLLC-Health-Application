import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpDelegateService} from "./http-delegate.service";

@Injectable({
  providedIn: 'root'
})

  
export class ServiceService {

  apiurl='https://kllc-health-api.herokuapp.com';
  constructor(public http:HttpClient, public httpDelegateService: HttpDelegateService) {
    
   }

   postUserDetails(body: any) {
       const httpOptions = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
       const url = this.apiurl + '/userLogin';
       return this.httpDelegateService.postAPI( url, this.convertObjectToXWWWFormUrlencoded(body), httpOptions);
   }

    convertObjectToXWWWFormUrlencoded(Object: any) {
        const p = [];
        for (const key in Object) {
            p.push(key + '=' + encodeURIComponent(Object[key]));
        }
        return p.join('&');
    }

   getHospitals() {
       const url = this.apiurl+'/hospitals';
       return this.httpDelegateService.getAPI( url);
   }


   getHospitalByName(name:String) {
       const url = this.apiurl+'/hospitals/'+name;
       return this.httpDelegateService.getAPI( url);
   }

    getDoctorsByRange(name:string) {
        const url = this.apiurl+'/doctors/'+name;
        return this.httpDelegateService.getAPI( url);
    }

    getProductDetails(name:String) {
        const url = this.apiurl+'/product/'+name;
        return this.httpDelegateService.getAPI( url);
    }

   getDoctors() {
     return new Promise(resolve=>{
       this.http.get(this.apiurl+'/doctors').subscribe(data=>{
         resolve(data);
       },err=>{
         console.log(err);
 
       });
      });
   }

   getProductsAllTypes() {
     return new Promise(resolve=>{
       this.http.get(this.apiurl+'/productbytypes/').subscribe(data=>{
         resolve(data);
       },err=>{
         console.log(err);
 
       });
      });
   }
  }
