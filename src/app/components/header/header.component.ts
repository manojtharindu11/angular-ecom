import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `<div
    class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"
  >
    <button routerLink="/" class="text-xl">Store</button>
    <app-primary-button
      [label]="cart() + ' (' + cartService.cart().length + ')'"
      (buttonClicked)="showButtonClicked()"
      routerLink="/cart"
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
