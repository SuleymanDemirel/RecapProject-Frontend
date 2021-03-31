import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-updated',
  templateUrl: './brand-updated.component.html',
  styleUrls: ['./brand-updated.component.css']
})
export class BrandUpdatedComponent implements OnInit {

  brandUpdateForm:FormGroup
  constructor(private formBuilder:FormBuilder, private brandService:BrandService, private toastrService:ToastrService) { }

  ngOnInit(): void {
     this.createBrandUpdate();
  }


  createBrandUpdate(){
    this.brandUpdateForm=this.formBuilder.group({
      brandId:["",Validators.required],
      brandName:["",Validators.required]

    })
  }

  update(){
    if(this.brandUpdateForm.valid){
       let brandModel = Object.assign({},this.brandUpdateForm.value)
       this.brandService.update(brandModel).subscribe(response=>{
        
        this.toastrService.success(response.message,"Başarılı!")
       }, responseError=>{
         if(responseError.error.ValidationErrors.length>0){
           for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama hatası");
             
           }
         }
       }) 
    }else{
      this.toastrService.error("Ürün Güncelleme başarısız.","Hata!");
    }
    
  }


}
