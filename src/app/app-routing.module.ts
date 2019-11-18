import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './home/menu/users/users.component';
import { AuthGuard } from './_guards/auth.guard';
import { SettingsComponent } from './home/menu/settings/settings.component';
import { AccountComponent } from './home/menu/account/account.component';



const routes: Routes = [
  { path: 'main', component: HomeComponent, canActivate: [AuthGuard],
  children: [
    { path: '', component: UsersComponent, outlet: 'main' },
    { path: 'settings', component: SettingsComponent, outlet: 'main' },
    { path: 'account', component: AccountComponent, outlet: 'main' },
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
