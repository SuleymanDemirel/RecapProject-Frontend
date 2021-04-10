import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListRespsonseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44374/api"
  constructor(private httpClient:HttpClient) { }


  getAll():Observable<ListRespsonseModel<User>>{
    return this.httpClient.get<ListRespsonseModel<User>>(this.apiUrl+"/users/getallusers")
  }

  getUserByMail(email:string):Observable<ListRespsonseModel<User>>{
    return this.httpClient.get<ListRespsonseModel<User>>(this.apiUrl+"/users/getuserdetails?email="+email)
  }

  update(user:User):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/users/update",user)

  }

  
}
