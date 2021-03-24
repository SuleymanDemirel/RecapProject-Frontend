import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListRespsonseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44374/api/brands/getall"
  constructor(private HttpClient:HttpClient) { }
  
  getBrands():Observable<ListRespsonseModel<Brand>>{
    return this.HttpClient.get<ListRespsonseModel<Brand>>(this.apiUrl)
  }



}
