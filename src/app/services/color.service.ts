import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListRespsonseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44374/api"
  
  constructor(private HttpClient:HttpClient) { }
  getColors():Observable<ListRespsonseModel<Color>>{
    let newPath = this.apiUrl + "/colors/getall"
    return this.HttpClient.get<ListRespsonseModel<Color>>(newPath)
  }

  add(color:Color):Observable<ResponseModel>{
    return this.HttpClient.post<ResponseModel>(this.apiUrl+"/colors/add",color)
   }

   update(color:Color):Observable<ResponseModel>{
    return this.HttpClient.post<ResponseModel>(this.apiUrl+"/colors/update",color)
   }

}
