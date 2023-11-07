import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OtpComponent } from './otp/otp.component';

import { NgOtpInputModule } from  'ng-otp-input';
@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    OtpComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MaterialModule,
    NgOtpInputModule
  ]
})
export class AuthenticationModule { }
