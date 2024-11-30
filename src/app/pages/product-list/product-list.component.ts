import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.models';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductListComponent {
  products = signal<Product[]>([
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
    {
      id: 3,
      title: 'Bluetooth Speaker',
      image: 'https://picsum.photos/200/300?random=3',
      price: 45.99,
      stock: 30,
    },
    {
      id: 4,
      title: 'USB-C Hub',
      image: 'https://picsum.photos/200/300?random=4',
      price: 25.49,
      stock: 75,
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      image: 'https://picsum.photos/200/300?random=5',
      price: 59.99,
      stock: 20,
    },
    {
      id: 6,
      title: 'Portable Charger',
      image: 'https://picsum.photos/200/300?random=6',
      price: 19.99,
      stock: 60,
    },
    {
      id: 7,
      title: 'Wireless Keyboard',
      image: 'https://picsum.photos/200/300?random=7',
      price: 35.99,
      stock: 40,
    },
    {
      id: 8,
      title: 'Laptop Cooling Pad',
      image: 'https://picsum.photos/200/300?random=8',
      price: 22.99,
      stock: 25,
    },
    {
      id: 9,
      title: 'Noise-Canceling Headphones',
      image: 'https://picsum.photos/200/300?random=9',
      price: 89.99,
      stock: 10,
    },
    {
      id: 10,
      title: 'Gaming Mouse',
      image: 'https://picsum.photos/200/300?random=10',
      price: 49.99,
      stock: 35,
    },
  ]);
}
