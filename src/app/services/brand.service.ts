import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListRespsonseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44374/api"
  constructor(private HttpClient:HttpClient) { }
  
  getBrands():Observable<ListRespsonseModel<Brand>>{
    let newPath = this.apiUrl + "/brands/getall"
    return this.HttpClient.get<ListRespsonseModel<Brand>>(newPath)
  }
  add(brand:Brand):Observable<ResponseModel>{
    return this.HttpClient.post<ResponseModel>(this.apiUrl+"/brands/add",brand)
   }
   update(brand:Brand):Observable<ResponseModel>{
    return this.HttpClient.post<ResponseModel>(this.apiUrl+"/brands/update",brand)
   }


}
