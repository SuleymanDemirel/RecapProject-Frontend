import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarImage } from 'src/app/models/carImage';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  currentCar:Car;
  filterText="";
  carImages:CarImage[]=[];

  path : string = "https://localhost:44374/Images/";
  
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService, private carImageService:CarImageService) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
     if(params["brandId"]){
       this.getCarsByBrand(params["brandId"])
     }else if(params["colorId"]){
      this.getCarsByColor(params["colorId"])
     }else if(params["id"]){
      this.getCarsDetailByCarId(params["id"])
     }else{
       this.getCars()
       this.getAllCarsImages()
     }
   })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
    
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data
    })
    
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data
     
    })
    
  }
  getCarsDetailByCarId(id:number){
    this.carService.getCarDetailsByCarId(id).subscribe(response=>{
      this.cars = response.data;
    })
  }

  getAllCarsImages(){
    this.carImageService.getAllCarImages().subscribe(response=>{
      this.carImages = response.data
        })
  }


}
