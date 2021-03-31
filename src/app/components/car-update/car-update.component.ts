import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  cars:Car[];
  carUpdateForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private carService:CarService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCarUpdate()
  }

  createCarUpdate(){
    this.carUpdateForm=this.formBuilder.group({
      id:["",Validators.required],
      // carId:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      carName:["",Validators.required],
      description:["",Validators.required]
  
    })
    
  }

  update(){
    if(this.carUpdateForm.valid){
       let carModel = Object.assign({},this.carUpdateForm.value)
       this.carService.update(carModel).subscribe(response=>{
        
        this.toastrService.success(response.message,"Başarılı!")
       }, responseError=>{
         if(responseError.error.ValidationErrors.length>0){
           for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama hatası");
             
           }
         }
       }) 
    }else{
      this.toastrService.error("Araç Güncelleme başarısız.","Hata!");
    }
    
  }
}
