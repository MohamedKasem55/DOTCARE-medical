import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './reusableComponents/header-component/header-component.component';
import { FooterComponentComponent } from './reusableComponents/footer-component/footer-component.component';
import { HomePageComponentComponent } from './Pages/home-page-component/home-page-component.component';
import { NavbarComponentComponent } from './reusableComponents/navbar-component/navbar-component.component';
import { ProductPageComponentComponent } from './Pages/product-page-component/product-page-component.component';
import { ProductDetailsComponent } from './reusableComponents/product-details/product-details.component';
import { BasicProductComponent } from './reusableComponents/basic-product/basic-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomePageComponentComponent,
    NavbarComponentComponent,
    ProductPageComponentComponent,
    ProductDetailsComponent,
    BasicProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
