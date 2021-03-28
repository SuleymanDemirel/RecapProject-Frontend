
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarComponent } from '../components/car/car.component';
import { Car } from '../models/car';
import { ListRespsonseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44374/api"
  constructor(private HttpClient:HttpClient) { }

  getCars():Observable<ListRespsonseModel<Car>>{
    let newPath = this.apiUrl + "/cars/getcarsdetail";
    return this.HttpClient.get<ListRespsonseModel<Car>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListRespsonseModel<Car>>{
    let newPath = this.apiUrl + "/cars/getbybrand?id="+brandId
    return this.HttpClient.get<ListRespsonseModel<Car>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListRespsonseModel<Car>>{
    let newPath = this.apiUrl + "/cars/getcolor?colorid="+colorId
    return this.HttpClient.get<ListRespsonseModel<Car>>(newPath)
  }

  getCarDetailsByCarId(id:number):Observable<ListRespsonseModel<Car>>{
    let newPath = this.apiUrl + "/cars/getcardetailsbycarid?id="+id;
    return this.HttpClient.get<ListRespsonseModel<Car>>(newPath);
  }

  getCarDetailsByColorAndBrand(colorId: number, brandId:number):Observable<ListRespsonseModel<Car>> {
    let newPath = this.apiUrl+'/cars/getcolorandbrand?colorId=' + colorId + '&brandId=' + brandId
    return this.HttpClient.get<ListRespsonseModel<Car>> (newPath)
  }

}
