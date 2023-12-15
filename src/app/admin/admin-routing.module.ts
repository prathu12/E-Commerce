import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';

const routes: Routes = [
  {path:"adminlogin", component:AdminpageComponent},
  {path:"adminprofile", component:AdminprofileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
