import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `<div
    class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"
  >
    <span class="text-xl">Store</span>
    <app-primary-button
      [label]="cart() + ' (' + cartService.cart().length + ')'"
      (buttonClicked)="showButtonClicked()"
    />
  </div>`,
  styles: '',
})
export class HeaderComponent {
  cart = signal('Cart');

  cartService = inject(CartService);

  showButtonClicked() {
    console.log('Clicked');
  }
}
