import { Product } from './../models/product.models';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([
    {
      id: 1,
      title: 'Wireless Earbuds',
      image: 'https://picsum.photos/200/300?random=1',
      price: 29.99,
      stock: 50,
    },
    {
      id: 2,
      title: 'Smartphone Stand',
      image: 'https://picsum.photos/200/300?random=2',
      price: 12.99,
      stock: 0,
    },
  ]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }
}
