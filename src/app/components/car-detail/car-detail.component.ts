import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:Car[]=[];
  rentals:Rental[];
  deneme="dx";
  carImages:CarImage[]=[];
  path : string = "https://localhost:44374/Images/";
  apiUrl : string = "https://localhost:44374/api";
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute, private rentalService:RentalService,
     private carImageService:CarImageService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["id"]) {
        this.getCarDetailsByCarId(params["id"]);
         this.getRentalDetailsById(params["id"]);
         this.getCarImageById(params["id"]);
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

  getCarImageById(id:number){
    this.carImageService.getCarImageById(id).subscribe(response=>{
      this.carImages = response.data;
    })
  }

 


}
