import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {


  rentals:Rental[];

  constructor(private activatedRoute:ActivatedRoute, private rentalService:RentalService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["id"]) {
        this.getRentalDetailsById(params["id"]);
      }
      // this.getAllRentals();
    })
  }
  getRentalDetailsById(id:number){
    this.rentalService.getRentalDetailsById(id).subscribe(response=>{
      this.rentals = response.data
    })
  }

  getAllRentals(){
    this.rentalService.getAllRentals().subscribe(response=>{
      this.rentals = response.data
    })
  }
}
