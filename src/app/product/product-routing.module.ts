import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductListComponent } from "./product-list/pfoduct-list.component";
import { ProductFormComponent } from "./product-form/pfoduct-form.component";
import { SelectProductMessageComponent } from './select-product-message/select-product-message.component';
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

const crisisCenterRoutes: Routes = [
  {
    path: "",
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
  }
];

// const appRoutes: Routes = [
//   { path: "admin/products", component: ProductListComponent },
//   { path: "admin/products/:id", component: ProductFormComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
