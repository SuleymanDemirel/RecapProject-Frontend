import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get(key:string){
    return localStorage.getItem(key);
  }
  add(key:string, value:any){
    let valueToString = value.toString();
    localStorage.setItem(key, valueToString);
  }
  delete(key:string){
    localStorage.removeItem(key);
  }
}
