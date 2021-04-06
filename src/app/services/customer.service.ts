import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListRespsonseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = "https://localhost:44374/api"
  constructor(private httpClient:HttpClient) { }

  getAllCustomers():Observable<ListRespsonseModel<Customer>>{
    return this.httpClient.get<ListRespsonseModel<Customer>>(this.apiUrl+"/customers/getall")
  }

  getCustomerDetailsById(customerId:number):Observable<ListRespsonseModel<Customer>>{
    return this.httpClient.get<ListRespsonseModel<Customer>>(this.apiUrl+"/customers/getcustomerdetailsbyid?customerId="+customerId)
  }

  getCustomerById(id:number):Observable<ListRespsonseModel<Customer>>{
    let newPath = this.apiUrl + "/customers/getcustomerbyid?id="+id
    return this.httpClient.get<ListRespsonseModel<Customer>>(newPath)
  }

}

