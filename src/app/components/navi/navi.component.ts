import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService,private route:Router,private toastrService:ToastrService,
    private authService:AuthService,private userService:UserService) { }

 email:string

  users:User[]=[];

  ngOnInit(): void {
    this.checkToEmail();
    this.checkToLogin();
    this.getUserByMail(this.email);
  }
  logout(){

    this.toastrService.info("Çıkış yapılıyor..","")
    this.localStorageService.delete("token")
    this.localStorageService.delete("expiration")
    this.localStorageService.delete("email")
    this.localStorageService.delete("password")
    this.route.navigate(['login']);

  }

  checkToLogin(){
    if(this.authService.isAuthenticated()){
     
      return true;
    }else{
      return false;
    }
  }

 
  getUserByMail(email:string){
    this.email = this.localStorageService.get("email");
    this.userService.getUserByMail(this.email).subscribe(response=>{
      this.users = response.data
    })
  }

  checkToEmail(){
    if(this.localStorageService.get('email')){
      return true;
    }else{
      return false;
    }
  }
}
