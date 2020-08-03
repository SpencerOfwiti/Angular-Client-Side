import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LockComponent } from './lock/lock.component';
import { MailComponent } from './mail/mail.component';
import { ResetComponent } from './reset/reset.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent, LogoutComponent, LockComponent, MailComponent, ResetComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
