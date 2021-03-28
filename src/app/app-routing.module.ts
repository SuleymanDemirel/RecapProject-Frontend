import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarRentComponent } from './components/car-rent/car-rent.component';

import { CarComponent } from './components/car/car.component';
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
  {path:"rental/:carId",component:RentalComponent},
  {path:"cars/cars/cardetail/:id/payment",component:PaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
