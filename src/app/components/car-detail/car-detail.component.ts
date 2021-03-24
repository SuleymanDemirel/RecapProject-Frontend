import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:Car[]=[];

  apiUrl : string = "https://localhost:44374/api";
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

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




}
