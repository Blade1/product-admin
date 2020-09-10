import { Injectable } from '@angular/core';
import {PRODUCTS} from './products-mock';
import { Observable, of } from 'rxjs';
import { Product } from "./product";
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    console.log("Got products");
    return of(PRODUCTS);
  }

  getProduct(id: string) {
    console.log("Got product with id " + id);
    return this.getProducts().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Product[]) => heroes.find(product => product.id === id))
    );
  }
}