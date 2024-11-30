import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `<div class="m-2"><app-header /> <router-outlet /></div>`,
  styles: [],
})
export class AppComponent {}
