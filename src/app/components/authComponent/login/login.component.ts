import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';

import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  users:User[];
  email:string;
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService, 
    private localStorageService:LocalStorageService,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm()
   
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
 
  login(){
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.success(response.message)
        this.router.navigate(['cars'])
        this.localStorageService.add("token",response.data.token)
        this.localStorageService.add("expiration",response.data.expiration)
        this.localStorageService.add("email",loginModel.email)
        this.localStorageService.add("password",loginModel.password)
        
        let mailAdress = this.localStorageService.get("email");
        this.email = mailAdress;
      
        this.userService.getUserByMail(this.email).subscribe(response=>{
          this.users = response.data
          console.log(this.users)

        })
      }, responseError=>{
        this.toastrService.error(responseError.error)
      })
    
    }
  }





 
}
