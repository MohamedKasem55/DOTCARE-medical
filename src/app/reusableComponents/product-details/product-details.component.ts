import { Component, OnInit } from '@angular/core';
import Product from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products:Array<Product>
  keyWordsSearch:string
  constructor(private productService:ProductsService) {
    this.products=[];
    this.keyWordsSearch=''
   }

  ngOnInit(): void {
    this.productService.searchProduct$.subscribe((data)=>{
      if(data)
      {
        console.log(data);
       this.products=this.productService.getProducts(data.productWareHouse,data.productType,data.productName,data.zeroBalance)
      console.log(this.products);}
      
    })
  }
  onhandFilter(onhand){
    this.products=this.products.filter((product)=>product.onHand==onhand)
  }
  nameFilter(name){
    this.products=this.products.filter((product)=>product.name==name)
  }
  typeFilter(type){
    this.products=this.products.filter((product)=>product.type==type)
  }

}
