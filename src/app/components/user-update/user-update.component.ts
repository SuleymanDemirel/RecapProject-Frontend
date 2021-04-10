import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  users:User[];
  UserUpdateForm:FormGroup

  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private userService:UserService) { }

  ngOnInit(): void {
    this.createUserUpdate();
  }


  createUserUpdate(){
    this.UserUpdateForm=this.formBuilder.group({
      id:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      passwordSalt:["",Validators.required],
      passwordHash:["",Validators.required]
     



  
    })
    
  }

  update(){
    if(this.UserUpdateForm.valid){
       let userModel = Object.assign({},this.UserUpdateForm.value)
       this.userService.update(userModel).subscribe(response=>{
        
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
