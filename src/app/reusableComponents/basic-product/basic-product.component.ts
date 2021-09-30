import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Product from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-basic-product',
  templateUrl: './basic-product.component.html',
  styleUrls: ['./basic-product.component.css']
})
export class BasicProductComponent implements OnInit{
  specific:boolean=false
  searchedProducts:Array<Product>
   searchProductForm:FormGroup; 
  constructor(private fb:FormBuilder,private productService:ProductsService) { 
    this.searchFormInitialization()
    
  }

  ngOnInit(): void {
    
  }
  searchFormInitialization(){
     this.searchProductForm=this.fb.group({
      productWareHouse:[null,Validators.required],
      productType:[null,Validators.required],
      productName:[null],
      zeroBalance:false,
    }) 

  }
  getTypes(){ 
    if(this.searchProductForm.get('productType').valid)
    {
      this.searchProductForm.get('productType').setErrors(Validators.required)   
      this.specific=false

    }
      this.searchedProducts=this.productService.getProducts(this.searchProductForm.get('productWareHouse').value);
      console.log(this.searchedProducts);
             
      
    }
  getProductsNames(){ 
      let warehouse=this.searchProductForm.get('productWareHouse').value
      let type=this.searchProductForm.get('productType').value      
      this.searchedProducts=this.productService.getProducts(warehouse,type);
      console.log(this.searchedProducts);
      
      
    }
    submitForm(){
      console.log(this.searchProductForm.get('zeroBalance').value);
      
      let warehouse=this.searchProductForm.get('productWareHouse').value
      let type=this.searchProductForm.get('productType').value 
      let name=this.searchProductForm.get('productName').value 
      let zeroBalance=this.searchProductForm.get('zeroBalance').value 
      this.productService.searchedProductBroadCast(this.searchProductForm.value);
      
    }
      getProductClassification(value){
        if(value==='Specific Product')
        {
          this.specific=true
          this.getProductsNames();
        }
        else if(value==='All Products')
         this.specific=false
        
                
      }
/*       getProductClassification(value){
        if(value==='Specific Product')
        this.getProductsNames()
        else if(value==='All Products')
         this.searchedProducts=null
        
                
      } */
 
}
