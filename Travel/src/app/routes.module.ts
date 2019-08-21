import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router'
import { WelcomeComponent } from './welcome/welcome.component';

export const myRouteConfig:Routes =[
  //if no parameters are passed after localhost
  {path:'',redirectTo:'welcome',pathMatch:'full'} //plese match full path after localhost
  ,{path:"register",component:RegisterComponent} //passing parameter to url we use :
  ,{path:"login",component:LoginComponent} 
  ,{path:"welcome",component:WelcomeComponent}
  ,{path:"**",component:RegisterComponent}]; //any thing not equal to the above ones, we use **

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(myRouteConfig)
  ],
  exports:
  [RouterModule]
})
export class RoutesModule { }
