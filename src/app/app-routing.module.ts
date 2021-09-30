import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponentComponent } from './Pages/home-page-component/home-page-component.component';
import { ProductPageComponentComponent } from './Pages/product-page-component/product-page-component.component';

const routes: Routes = [
{path: 'Home', component: HomePageComponentComponent },
{path: 'Home/Products', component: ProductPageComponentComponent,pathMatch:'full' },
{path: '',redirectTo:'Home',pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
