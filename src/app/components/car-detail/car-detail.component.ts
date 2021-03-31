import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:Car[]=[];
  rentals:Rental[];
  deneme="dx";

  apiUrl : string = "https://localhost:44374/api";
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute, private rentalService:RentalService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["id"]) {
        this.getCarDetailsByCarId(params["id"]);
         this.getRentalDetailsById(params["id"]);
      }
    
    })
  }

  getCarDetailsByCarId(id:number){
    this.carService.getCarDetailsByCarId(id).subscribe(response=>{
      this.cars = response.data;
    })
  }

  getRentalDetailsById(id:number){
    this.rentalService.getRentalDetailsById(id).subscribe(response=>{
      this.rentals = response.data;
    })
  }

 




}
