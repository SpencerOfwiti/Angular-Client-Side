import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ResetComponent} from "./reset/reset.component";
import {LogoutComponent} from "./logout/logout.component";
import {LockComponent} from "./lock/lock.component";
import {MailComponent} from "./mail/mail.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'reset-password', component: ResetComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'lock-screen', component: LockComponent },
  { path: 'confirm-mail', component: MailComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
