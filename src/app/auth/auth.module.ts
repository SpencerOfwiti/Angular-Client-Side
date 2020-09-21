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
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { PasswordToggleDirective } from './_directives/password-toggle.directive';


@NgModule({
  declarations: [AuthComponent, LoginComponent, LogoutComponent, LockComponent, MailComponent, ResetComponent, SignupComponent, PasswordToggleDirective],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class AuthModule { }
