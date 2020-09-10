import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductService } from './product/product.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';

import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductFormComponent } from "./product/product-form/product-form.component";
import { SelectProductMessageComponent } from './product/select-product-message/select-product-message.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, PageNotFoundComponent, CategoryListComponent, ProductListComponent, ProductFormComponent, SelectProductMessageComponent],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule {
    constructor(router: Router) { }
 }
