import { NgModule } from '@angular/core';

// import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router'
// import {HomeComponent} from './home/home.component';

export const routes:Routes = [
  // {path:'',redirectTo:'home',pathMatch:'full'},
  // ,{path:"login",component:LoginComponent} 
  // ,{path:"home",component:HomeComponent}
  // ,{path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
