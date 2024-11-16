import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [  
    CommonModule,
    RouterModule,
    EditProfileComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user = {
    name: 'Emma Smith',
    mail: 'aseaicnoiq@jzncjned',
    location: 'Los Angeles, California',
    phone: '123456789',
    image: 'assets/img/Earth Tones and Musical Touches_ Elegant Clothing on Coat Racks.jpg'
  };


}
