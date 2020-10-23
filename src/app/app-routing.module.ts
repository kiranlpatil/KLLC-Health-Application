import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dashboard/:first_name',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./product-types/products.module').then(m => m.ProductsPageModule)
  },
  {
    path: 'doctor',
    loadChildren: () => import('./doctor/doctor.module').then(m => m.PriceListPageModule)
  },
  {
    path: 'all-product-types',
    loadChildren: () => import('./all-products/all-products.module').then( m => m.AllProductsPageModule)
  },
  {
    path:'product-details',
    loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
  {
    path:'productDetail/:p_name',
    loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
  {
    path: 'hospital-information',
    loadChildren: () => import('./hospital-information/hospital-information.module').then(m => m.HospitalInformationModule)
  },
  {
    path: 'doctors',
    loadChildren: () => import('./doctors/doctors.module').then(m => m.PricelistAllProductPageModule)
  },
  {
    path: 'hospital',
    loadChildren: () => import('./hospital/hospital.module').then(m => m.CompanyPageModule)
  },
  {
    path:'hospital-info/:v_name',
    loadChildren: () => import('./hospital-information/hospital-information.module').then(m => m.HospitalInformationModule)

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
