import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

import {ToastrModule} from "ngx-toastr";

import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { CarRentComponent } from './components/car-rent/car-rent.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { BrandUpdatedComponent } from './components/brand-updated/brand-updated.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { LoginComponent } from './components/authComponent/login/login.component';
import { RegisterComponent } from './components/authComponent/register/register.component';
import { AuthInterceptor } from './components/interceptors/auth.interceptor';
import { CustomerComponent } from './components/customer/customer.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { LogoutComponent } from './components/authComponent/logout/logout.component';
import { UserComponent } from './components/user/user.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { CreditCartComponent } from './components/credit-cart/credit-cart.component';





@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    RentalComponent,
    BrandComponent,
    ColorComponent,
    CarDetailComponent,
    FilterPipePipe,
    CarFilterPipe,
    CarFilterComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    CarRentComponent,
    PaymentComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    ColorUpdateComponent,
    BrandUpdatedComponent,
    CarUpdateComponent,
    LoginComponent,
    RegisterComponent,
    CustomerComponent,
    LogoutComponent,
    UserComponent,
    UserUpdateComponent,
    CreditCartComponent





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    LocalStorageModule.forRoot({
      prefix: "storage",
      storageType: "localStorage"
    }),
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })

    
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
