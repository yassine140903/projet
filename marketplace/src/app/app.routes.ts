import { provideRouter, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent,

    },
    {
        path:'Signup',
        component:SignupComponent,

    },        

    {
        path: '',
        component: ProfileComponent,
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent,
      },
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});    



