import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authComponent/login/login.component';
import { RegisterComponent } from './components/authComponent/register/register.component';
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
import { CreditCartComponent } from './components/credit-cart/credit-cart.component';

import { CustomerComponent } from './components/customer/customer.component';
import { LoginGuard } from './components/guards/login.guard';

import { PaymentComponent } from './components/payment/payment.component';

import { RentalComponent } from './components/rental/rental.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent, canActivate:[LoginGuard]},
  {path:"cars",component:CarComponent, canActivate:[LoginGuard]},
  {path:"cars/color/:colorId",component:CarComponent, canActivate:[LoginGuard]},
  {path:"cars/brand/:brandId",component:CarComponent, canActivate:[LoginGuard]},
  {path:"cars/cars/cardetail/:id",component:CarDetailComponent, canActivate:[LoginGuard]},
  {path:"cars/brand/:brandId/cars/cardetail/:id", component:CarDetailComponent, canActivate:[LoginGuard]},
  {path:"cars/color/:colorId/cars/cardetail/:id", component:CarDetailComponent, canActivate:[LoginGuard]},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent, canActivate:[LoginGuard]},
  {path:"rentals/:id",component:RentalComponent, canActivate:[LoginGuard]},
  {path:"cars/cars/cardetail/:id/payment",component:PaymentComponent, canActivate:[LoginGuard]},
  {path:"cars/add", component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"cars/cars/cardetail/:id/update", component:CarUpdateComponent, canActivate:[LoginGuard]},
  {path:"brands/add", component:BrandAddComponent, canActivate:[LoginGuard]},
  {path:"colors/add", component:ColorAddComponent, canActivate:[LoginGuard]},
  {path:"colors/update", component:ColorUpdateComponent, canActivate:[LoginGuard]},
  {path:"brands/update", component:BrandUpdatedComponent, canActivate:[LoginGuard]},
  {path:"cars/filter/brand/:brandId/color/:colorId",component:CarComponent, canActivate:[LoginGuard]},

  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"user",component:UserComponent},
  {path:"user/update",component:UserUpdateComponent},
  {path:"customers",component:CustomerComponent},
  {path:"cart/add",component:CreditCartComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
