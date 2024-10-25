import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path:"",
    component:RegistrationComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
   path:"profile",
   component:ProfileComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class RegistrationRoutingModule { }
