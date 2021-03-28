import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cars:Car[]=[];
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["id"]) {
        this.getCarDetailsByCarId(params["id"]);
      }
    })
  }

  getCarDetailsByCarId(id:number){
    this.carService.getCarDetailsByCarId(id).subscribe(response=>{
      this.cars = response.data;
    })
  }

  paymentWork(car:Car){
   
    this.toastrService.success("Başarıyla Kiralandı.",""+"Araç ismi: "+car.carName +" Marka: "+" "+car.brandName+" "+"Fiyat:  "+car.dailyPrice);

   
}
}
