import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[];
  constructor(private customerService:CustomerService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
        if (params["customerId"]) {
          this.getCustomerDetailsById(params["customerId"]);
           
        }else if(params["id"]){
          this.getCustomerById(params["id"])
        }else{
          this.getAllCustomers()
        }
      
      })
    
  }

  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe(response => {
      this.customers = response.data;
     
    })
  }

  getCustomerDetailsById(customerId:number){
    this.customerService.getCustomerDetailsById(customerId).subscribe(response=>{
      this.customers = response.data;
    })
  }

  getCustomerById(id:number){
    this.customerService.getCustomerById(id).subscribe(response=>{
      this.customers = response.data
    })
    
  }

  

}
