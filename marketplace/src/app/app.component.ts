import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { ProductPageComponent } from './product/product.component';
  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent , SignupComponent , RouterLink,RouterLinkActive, ProductPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'marketplace';
}
