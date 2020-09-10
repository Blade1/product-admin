import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductFormComponent } from "./product/product-form/product-form.component";
import { SelectProductMessageComponent } from './product/select-product-message/select-product-message.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CategoryListComponent } from "./category/category-list/category-list.component";

const appRoutes: Routes = [
    {
    path: "admin/products",
    component: ProductListComponent,
    children: [
      {
        path: ":id",
        component: ProductFormComponent
      },
      {
        path: "",
        component: SelectProductMessageComponent
      }
    ]
  },
  { path: "admin/categories", component: CategoryListComponent },
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
