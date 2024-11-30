import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product.models';
import { ButtonComponent } from '../button/button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `<div
    class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center"
  >
    <img class="w-[50px] h-[50px] object-contain" [src]="item().image" />
    <div class="flex flex-col">
      <span class="text-md font-bold">{{ item().title }}</span>
      <span class="text-sm">{{ '$ ' + item().price }}</span>
    </div>
    <div class="ml-auto">
      <app-button
        label="Remove"
        (buttonClicked)="cartService.removeFromCart(item().id)"
      />
    </div>
  </div> `,
  styles: ``,
})
export class CartItemComponent {
  item = input.required<Product>();
  cartService = inject(CartService);
}
