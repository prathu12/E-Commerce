import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './men/men.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { WomenComponent } from './women/women.component';
import { BoyComponent } from './boy/boy.component';
import { GirlComponent } from './girl/girl.component';

const routes: Routes = [
  {path:"accessories", component:AccessoriesComponent,
children:[
  {path:"", component:MenComponent},
  {path:"men", component:MenComponent},
  {path:"women", component:WomenComponent},
  {path:"boy", component:BoyComponent},
  {path:"girl", component:GirlComponent}
]
}
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductItemRoutingModule { }
