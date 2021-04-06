import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListRespsonseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44374/api";
  constructor(private httpClient:HttpClient) { }

  getAllCarImages():Observable<ListRespsonseModel<CarImage>>{
    let newPath = this.apiUrl +"/carsImage/getall"
    return this.httpClient.get<ListRespsonseModel<CarImage>>(newPath);

  }
  getCarImageById(id:number):Observable<ListRespsonseModel<CarImage>>{
    let newPath = this.apiUrl +"/carsImage/getcarimagebyid?id="+id
    return this.httpClient.get<ListRespsonseModel<CarImage>>(newPath);

  }


 
}
