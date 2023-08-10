
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // You can create a CSS file for styling
})
export class HeaderComponent {
  companyName = 'PALAK AIRLINES';

  login() {
    // Implement your login logic here
  }
}