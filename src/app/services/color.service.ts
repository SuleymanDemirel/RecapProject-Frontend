import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListRespsonseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44374/api/colors/getall"
  
  constructor(private HttpClient:HttpClient) { }
  getColors():Observable<ListRespsonseModel<Color>>{
    return this.HttpClient.get<ListRespsonseModel<Color>>(this.apiUrl)
  }

}
