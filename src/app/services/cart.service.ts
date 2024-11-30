import { Product } from './../models/product.models';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart().push(product);
  }
}
