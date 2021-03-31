import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdatedComponent } from './components/brand-updated/brand-updated.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarRentComponent } from './components/car-rent/car-rent.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';

import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { PaymentComponent } from './components/payment/payment.component';

import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/cars/cardetail/:id",component:CarDetailComponent},
  {path:"cars/brand/:brandId/cars/cardetail/:id", component:CarDetailComponent},
  {path:"cars/color/:colorId/cars/cardetail/:id", component:CarDetailComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"rentals/:id",component:RentalComponent},
  {path:"cars/cars/cardetail/:id/payment",component:PaymentComponent},
  {path:"cars/add", component:CarAddComponent},
  {path:"cars/cars/cardetail/:id/update", component:CarUpdateComponent},
  {path:"brands/add", component:BrandAddComponent},
  {path:"colors/add", component:ColorAddComponent},
  {path:"colors/update", component:ColorUpdateComponent},
  {path:"brands/update", component:BrandUpdatedComponent},

  {path:"cars/filter/brand/:brandId/color/:colorId",component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
