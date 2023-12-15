import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductItemRoutingModule } from './product-item-routing.module';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { BoyComponent } from './boy/boy.component';
import { GirlComponent } from './girl/girl.component';
import { ProductApiService } from './product-api.service';


@NgModule({
  declarations: [
    MenComponent,
    WomenComponent,
    AccessoriesComponent,
    BoyComponent,
    GirlComponent
  ],
  imports: [
    CommonModule,
    ProductItemRoutingModule
  ],
  providers:[ProductApiService]
})
export class ProductItemModule { }
