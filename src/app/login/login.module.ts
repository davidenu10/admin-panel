import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { InitiateComponent } from './initiate/initiate.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    EmailVerifyComponent,
    InitiateComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
