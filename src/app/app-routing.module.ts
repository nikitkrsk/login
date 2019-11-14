import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component'
import { AuthGuard } from './guards/auth.guard';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: 'main', component: HomeComponent, canActivate: [AuthGuard],
  children:[
    { path: '', component: UsersComponent, outlet: "main" },
    { path: 'settings', component: SettingsComponent, outlet: "main" },
  ]},
 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
