import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { AccountService } from 'src/app/providers/account.service';
import { ShareService } from 'src/app/providers/share.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage],
  providers: [
    AccountService,
    ShareService
  ]
})
export class LoginPageModule {}
