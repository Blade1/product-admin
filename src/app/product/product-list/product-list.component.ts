import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;
  selectedId: string;
  constructor(private service: ProductService) {}

  ngOnInit() {
    this.products = this.service.getProducts();
  }
}
