import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

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
    PaymentComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-full-width"
    })

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
