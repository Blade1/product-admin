import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from "./product/product-list/pfoduct-list.component";
import { ProductFormComponent } from "./product/product-form/pfoduct-form.component";
import { SelectProductMessageComponent } from './product/select-product-message/select-product-message.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductFormComponent,
    SelectProductMessageComponent,
    PageNotFoundComponent
  ]
})
export class ProductModule { }