import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService, private localStorageService:LocalStorageService) { }
 
  email:string;
  users:User[];

  ngOnInit(): void {

    this.getUserByMail(this.email);
  }

  getAll(){
    this.userService.getAll().subscribe(response=>{
      console.log(response.data)
      this.users = response.data;
      
    })
  }

  getUserByMail(email:string){
    this.email = this.localStorageService.get("email");
    this.userService.getUserByMail(this.email).subscribe(response=>{
      this.users = response.data
    })
  }
}
