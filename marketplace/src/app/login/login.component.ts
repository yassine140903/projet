
import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { RouterLink } from '@angular/router'; 
import { RouterLinkActive } from '@angular/router'; 
import { RouterOutlet } from '@angular/router'; 


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SignupComponent , RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(){

  }



    
  ngOnInit(): void {

    };

}
