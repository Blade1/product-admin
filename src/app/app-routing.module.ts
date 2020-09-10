import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// import { ProductListComponent } from "./product/product-list/pfoduct-list.component";
import { ProductModule } from './product/product.module';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CategoryListComponent } from "./category/category-list/category-list.component";

const appRoutes: Routes = [
  { path: "admin/categories", component: CategoryListComponent },
  { path: "admin/products", component: ProductModule},
  { path: "", redirectTo: "/admin/categories", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
