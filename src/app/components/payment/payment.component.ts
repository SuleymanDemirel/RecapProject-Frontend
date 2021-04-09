import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { User } from 'src/app/models/user';
import { CarService } from 'src/app/services/car.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  cars:Car[]=[];
  rentalAddForm:FormGroup
  carId:number;
  email:string;
  users:User[];
 
 
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService,
    private rentalService:RentalService,private formBuilder:FormBuilder,private localStorageService:LocalStorageService,private userService:UserService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["id"]) {
        this.getCarDetailsByCarId(params["id"]);
       
        this.createRentalAddForm();
        this.getUserByMail(this.email);
       
      }
    })
  }

  getCarDetailsByCarId(id:number){
    this.carId =id
    this.carService.getCarDetailsByCarId(id).subscribe(response=>{
      this.cars = response.data;
      
    })
  }

  paymentWork(car:Car){
   
    this.toastrService.success("Başarıyla Kiralandı.",""+"Araç ismi: "+car.carName +" Marka: "+" "+car.brandName+" "+"Fiyat:  "+car.dailyPrice);
}

createRentalAddForm(){
  this.rentalAddForm=this.formBuilder.group({
    rentalId:["",Validators.required],
    carId:["",Validators.required],
    customerId:["",Validators.required],
    rentDate:["",Validators.required],
    returnDate:["",Validators.required]

   
  })
}




add(){
  if(this.rentalAddForm.valid){
     let rentalModel = Object.assign({},this.rentalAddForm.value)
     this.rentalService.rentalAdd(rentalModel).subscribe(response=>{
      
      this.toastrService.success(response.message,"Başarılı!")
     }, responseError=>{
       if(responseError.error.ValidationErrors.length>0){
         for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama hatası");
           
         }
       }
     }) 
  }else{
    this.toastrService.error("Ürün Ekleme başarısız.","Hata!");
  }
}

getUserByMail(email:string){
  this.email = this.localStorageService.get("email");
 
  this.userService.getUserByMail(this.email).subscribe(response=>{
    this.users = response.data
  })
}


}
