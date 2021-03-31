import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {
 
  selectedColor: number;

  colors:Color[];
  colorUpdateForm:FormGroup;
  colorGetId:Color;
  constructor(private formBuilder:FormBuilder, private colorService:ColorService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createColorUpdate();
    this.getColors();
  }
  createColorUpdate(){
    this.colorUpdateForm=this.formBuilder.group({
      colorId:["",Validators.required],
      colorName:["",Validators.required]
      
    })
    
  }

  
  update(){
    if(this.colorUpdateForm.valid){
       let colorModel = Object.assign({},this.colorUpdateForm.value)
       this.colorService.update(colorModel).subscribe(response=>{
        
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

  setSelectedColor(colorId: number){
    this.selectedColor = colorId;
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      
    });
  }
}
