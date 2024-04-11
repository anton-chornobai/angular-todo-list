import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent]
})
export class AppComponent{
  name = 'Anton'
  allowNewServer = true
  serverMessage = 'Hello'
  constructor() {
    setTimeout(() => {
      this.allowNewServer = false
    }, 2000)
  }
}

