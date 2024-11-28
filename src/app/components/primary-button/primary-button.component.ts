import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `<button class="" (click)="handleButtonClick()">{{ label }}</button>`,
  styles: ``,
})
export class PrimaryButtonComponent {
  @Input() label: string = '';

  handleButtonClick() {
    console.log('Button clicked');
  }
}
