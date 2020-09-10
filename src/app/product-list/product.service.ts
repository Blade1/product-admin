import { Injectable } from '@angular/core';
import {PRODUCTS} from './products-mock';
import { Observable, of } from 'rxjs';
import { Product } from "./product";

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    console.log("Got products");
    return of(PRODUCTS);
  }
}