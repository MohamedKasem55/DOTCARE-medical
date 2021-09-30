import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import productsData from '../dataStorage/allData';
import Product, { searchedProduct } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

    searchedProductSubject=new BehaviorSubject<searchedProduct>(null)
    searchProduct$=this.searchedProductSubject.asObservable()


    getProducts(warehouse:string,type?:string,name?:string,zeroBalance?:boolean){
    // we should use an api here to get the types of each warehouse PASSED by the function
  return  productsData.filter((product)=> {
      if(warehouse&&type&&name&&zeroBalance)
      {
        if(product.wareHouse===warehouse && product.type===type &&product.name===name&&product.zeroBalance===true)
      return product
      }
      else if(warehouse&&type&&name)
      {
        if(product.wareHouse===warehouse && product.type===type &&product.name===name)
      return product
      }
      else if(warehouse&&type&&!name)
      {   
        if(product.wareHouse===warehouse && product.type===type)
      return product
      }
       else if(warehouse && !type)
      if(product.wareHouse===warehouse)
      return product 

    })
  }
   getTypes(warehouse:string){
    let arr=[]
    productsData.map((product)=> {
      if(warehouse===product.wareHouse )
      arr.push(product)
    })
    return arr
  } 
  searchedProductBroadCast(searchedProduct){
    this.searchedProductSubject.next(searchedProduct);
  }

}
