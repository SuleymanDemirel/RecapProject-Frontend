import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListRespsonseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44374/api"
  constructor(private httpClient:HttpClient) { }

  getRental(rentalId:number):Observable<ListRespsonseModel<Rental>>{
    let newPath = this.apiUrl + "/rentals/getrentalbyid?id="+rentalId
    return this.httpClient.get<ListRespsonseModel<Rental>>(newPath)
  }

}

