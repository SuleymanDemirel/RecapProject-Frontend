import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { AuthService } from 'src/app/services/auth.service';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  currentBrand:Brand;

  constructor(private brandService:BrandService, private authService:AuthService) { }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if (brand == this.currentBrand) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllBrandClass(){
    if (!this.currentBrand) {
      return "list-group-item active"
    } else {
      return "list-group-item"
      
    }
  }

  checkToLogin(){
    if(this.authService.isAuthenticated()){
     
      return true;
    }else{
      return false;
    }
  }
}
