import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductService } from './product/product.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, ProductListComponent, PageNotFoundComponent, CategoryListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule {
    constructor(router: Router) { }
 }
