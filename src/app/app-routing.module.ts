import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBodyComponent } from './home-body/home-body.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './product-item/men/men.component';
import { WomenComponent } from './product-item/women/women.component';

const routes: Routes = [
  {path:"", component:HomeBodyComponent},
  {path:"home", component:HomeBodyComponent},
  {path:"signin", component:RegistrationComponent},
  {path:"login", component:LoginComponent},
  {path:"men", component:MenComponent},
  {path:"women", component:WomenComponent},
  {path:"admin", loadChildren: ()=> import ('./admin/admin.module').then(module => module.AdminModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
