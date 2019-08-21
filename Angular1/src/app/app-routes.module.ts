import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ErrorComponent } from './error/error.component';

//if ("path"=="about"){"component":"AboutComponent"}

export const myRouteConfig:Routes =[
  //if no parameters are passed after localhost
  {path:'',redirectTo:'products',pathMatch:'full'} //plese match full path after localhost
  ,{path:"about/:id/:name/:location",component:AboutComponent} //passing parameter to url we use :
  ,{path:"products",component:ProductsComponent},
  {path:"**",component:ErrorComponent}]; //any thing not equal to the above ones, we use **

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(myRouteConfig) //forRoot means for top most in the hierarchy.(appmodule.ts)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutesModule { }
