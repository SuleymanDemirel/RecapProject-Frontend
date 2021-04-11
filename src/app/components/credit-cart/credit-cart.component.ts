import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreditCartService } from 'src/app/services/credit-cart.service';

@Component({
  selector: 'app-credit-cart',
  templateUrl: './credit-cart.component.html',
  styleUrls: ['./credit-cart.component.css']
})
export class CreditCartComponent implements OnInit {

  creditCartAddForm:FormGroup
  constructor(private formBuilder:FormBuilder, private creditCartService:CreditCartService, private toastrService:ToastrService) { }

  ngOnInit(): void {
  this.createCartAddForm();
  }


  createCartAddForm(){
    this.creditCartAddForm=this.formBuilder.group({
      creditCartId:["",Validators.required],
      firstNameAndLastName:["",Validators.required],
      cvv:["",Validators.required],
      date:["",Validators.required],
      cartNumber:["",Validators.required]

     
    })
  }


  add(){
    if(this.creditCartAddForm.valid){
       let cartModel = Object.assign({},this.creditCartAddForm.value)
       this.creditCartService.add(cartModel).subscribe(response=>{
        
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


}
