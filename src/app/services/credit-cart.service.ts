import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCart } from '../models/creditCart';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCartService {

 apiUrl = "https://localhost:44374/api"
  
  constructor(private httpClient:HttpClient) { }


  add(creditCart:CreditCart):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/creditcarts/add",creditCart)
   }
   
}
