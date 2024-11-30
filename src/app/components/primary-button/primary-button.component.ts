import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `<button
    class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90"
    (click)="buttonClicked.emit()"
  >
    {{ label }}
  </button>`,
  styles: ``,
})
export class PrimaryButtonComponent {
  @Input() label: string = '';
  @Output() buttonClicked = new EventEmitter<void>();
}
